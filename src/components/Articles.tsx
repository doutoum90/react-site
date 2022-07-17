import articles from "../assets/articles.json";
import React from "react";
import { Link } from "react-router-dom";

export default function Articles(): JSX.Element {
  return (
    <>
      {articles.map((article, key) => {
        return (
          <div className="article-item" key={key}>
            <Link to={"/articles/" + article.id}>
              <h3>{article.title}</h3>
            </Link>
            <p>{article.body}</p>
          </div>
        );
      })}
    </>
  );
}
