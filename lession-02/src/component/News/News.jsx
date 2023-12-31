import React, { useEffect, useState } from "react";
import NewsCard from "../Card/NewsCard";
import { useLoaderData } from "react-router-dom";

function News() {
  // const [content, setContent] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     `https://newsapi.org/v2/everything?q=india&from=2023-12-08&sortBy=popularity&apiKey=445cabae0cea4857b8b82b89a413e24b`
  //   )
  //     .then((response) => response.json())
  //     .then((news) => {
  //       setContent(news.articles);
  //       console.log(news.articles);
  //     });
  // }, []);
  const content = useLoaderData();
  console.log(content);
  return (
    <div className="flex flex-wrap">
      {content.articles.map((event) => {
        return <NewsCard articleContent={event} />;
      })}
    </div>
  );
}

export default News;

export const newsLoader = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=india&from=2023-12-08&sortBy=popularity&apiKey=445cabae0cea4857b8b82b89a413e24b`
  );
  return response.json();
};
