import { useEffect, useState} from 'react'
import React from 'react'
import './CategoryArticles.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Config/FireBaseConfig';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

function CategoryArticles() {

    const {categoryName} = useParams();

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        //create reference to firebase articles collection
        const articleRef = collection(db, "Articles");
        //now we get the data
        //create query
        const q = query(articleRef, where("category", "==", categoryName));

        //now get the data that matches the query
        getDocs(q, articleRef)
            .then((res) => {
            const articles = res.docs.map(item => ({
                id: item.id, 
                ...item.data(),
            }));
            // console.log(articles)
            setArticles(articles)
        })
        .catch((err) => console.log(err));

    },[categoryName]);

  return (
    <div className="category-articles">
    {articles.length === 0 ? (
      <p>No articles</p>
    ) : (
      articles?.map((item) => <ArticleCard article={item} />)
    )}
  </div>
  )
}

export default CategoryArticles