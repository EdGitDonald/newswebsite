import React, { useState } from 'react'
import './Auth.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Config/FireBaseConfig';
import { useNavigate } from 'react-router-dom';

function Auth() {

    const navigate = useNavigate();

    const[form, setForm] = useState(true);
    
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[name, setName] = useState('')

    const handleSignup = e => {
        e.preventDefault();
        // console.log('signup')
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => { 
        //add username as display name 
        updateProfile(auth.currentUser, {displayName: name});
        // console.log(res.user.displayName);

        //navigate the user to Homepage after signUp
        navigate("/");

    })
        .catch((err) => alert(err.code));
    }

    const handleLogin = e => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            navigate('/')
        })
        .catch((err) => alert(err.message));

    }

  return (
    <div>
        {form ? (
            <form className='auth-form' onSubmit={handleLogin}>
            <h1>Login with your email</h1>
            <div className='form-group'>
                <input type="email" placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder='Enter Your Password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button type='submit'>Login</button>
            <p>
                Don't have an account?{" "}
                <span className='form-link' onClick={() => setForm(false)}>SignUp</span>
            </p>
        </form> 
        ) : (
        <form className='auth-form' onSubmit={handleSignup}>
            <h1>Sign up with your email</h1>
            <div className='form-group'>
                <input type='text' placeholder='Enter Your Name' required onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="email" placeholder='Enter Your Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder='Enter Your Password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <button type='submit'>Register</button>
            <p>
                Already have an account? {" "}
                <span className='form-link' onClick={() => setForm(true)}>Login</span>
            </p>
        </form>
    )}
    </div>
  )
}

export default Auth