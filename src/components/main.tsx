import articles from "../assets/articles.json";

export default function Main() {
  console.log(articles);

  return (
    <>
      <div>
        {articles.map((article, key) => {
          return (
            <div className="article-item">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
