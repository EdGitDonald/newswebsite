import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Hompage'
import CategoryArticles from './Pages/CategoryArticles/CategoryArticles'
import Auth from './Pages/Auth/Auth'


function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/category/:categoryName' element={<CategoryArticles />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
