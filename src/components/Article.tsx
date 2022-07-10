import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import articles from "../assets/articles.json";
import { ArticleInterf } from "../interfaces/article.interface";


export default function Article() {
  const [message, setMessage] = useState("");
  const { number } = useParams();
  const [article, setArticle] = useState<ArticleInterf>();

  useEffect(() => {
    if (number) {
      const article: ArticleInterf | undefined = articles.find(
        (article) => article.id === Number(number)
      );
      setArticle(article);
    } else {
      setMessage("id introuvable");
    }
  });
  return (
    <>
      <div className="article-item" key="article-item-detail">
        <h3>{article?.title}</h3>
        <p>{article?.body}</p>
      </div>
    </>
  );
}
