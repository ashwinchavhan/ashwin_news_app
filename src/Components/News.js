// News.js
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = ({ category, isDarkMode }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [country] = useState('us');
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      // const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=abc49526e0574544bde4841b4fce1f04`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };

    fetchNews();
  }, [page, pageSize, country, category]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container my-3">
      <h2>AAJ TAK - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines from {country.toUpperCase()}</h2>
      <div className="row">
        {articles.map((element, index) => (
          <div className="col-md-4" key={index}>
            <NewsItem
              title={element.title ? element.title.slice(0, 45) : "Default Title"}
              description={element.description || "Default description text."}
              imageUrl={element.urlToImage || "https://media.wired.com/photos/6703eb3979f13fda7f04485b/191:100/w_1280,c_limit/Satoshi-Nakamoto-biz-1341874258.jpg"}
              newsUrl={element.url || "#"}
              source={element.source.name}
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button 
          disabled={page <= 1} 
          className={`btn ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`} 
          onClick={handlePreviousPage}>
          Back
        </button>
        <button 
          className={`btn ${isDarkMode ? 'btn-light text-dark' : 'btn-dark text-light'}`} 
          onClick={handleNextPage} 
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
