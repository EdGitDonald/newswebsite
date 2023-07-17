import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import './Banner.css'
import { db } from '../../Config/FireBaseConfig'


function Banner() {

const [mainArticle, setMainArticle] = useState({});
const [otherArticles, setOtherArticles] = useState([]);

    useEffect(() => {
        //create a variable reference to the articles collection
        const articleRef = collection(db, "Articles")

        //set up query to filter responses and sort and then get first 5 articles
        const q = query(articleRef, orderBy("createdAt", "desc"), limit(5))

        getDocs(q, articleRef)
         .then((res) => { //console.log(res.docs[0].data())
        const articles = res.docs.map(item => {
            return {id: item.id, ...item.data()};
        });
        console.log(articles);
        setMainArticle(articles[0]);
        setOtherArticles(articles.splice(1));
        })
        .catch((err) => {console.log(err)})
    },[])


  return (
    <div className='banner-container'>
        <div className='main-article-container' key={mainArticle?.id}style={{backgroundImage:`url(${mainArticle?.imageUrl})`}}>
        <div className='banner-info'>
            <h2>{mainArticle?.title}</h2>
            <div className='main-article-info'>
                <p>{mainArticle?.createdAt?.toDate().toDateString()}</p>
            </div>
        </div>
        </div>
        <div className='other-articles-container'>
            {
                otherArticles.map(item => (
                    <div className='other-article-item' key={item?.id} style={{backgroundImage:`url(${item?.imageUrl})` }}> 
                    <div className='banner-info'> 
                    <h3>{item?.title}</h3>
                    <small>{item?.createdAt?.toDate().toDateString()}</small>
                    </div>
        
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Banner