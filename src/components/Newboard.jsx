import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const Newboard = ({category}) => {
  const [articles, setArticles] =useState([]);

  useEffect(() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=40fae6d0e18f4c44936aeb09fd85d69d`;
    fetch(url).then(response=> response.json()).then(data =>setArticles(data.articles));
  }, [category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-primary'>News</span></h2>
      {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newboard