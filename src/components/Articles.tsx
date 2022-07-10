import articles from "../assets/articles.json";
import React from "react";

export default function Articles(): JSX.Element {
  return (
    <div>
      {articles.map((article, key) => {
        return (
          <div className="article-item" key={key}>
            <a href={"articles/" + article.id}>
              <h3>{article.title}</h3>
            </a>
            <p>{article.body}</p>
          </div>
        );
      })}
    </div>
  );
}
