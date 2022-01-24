import { useEffect, useState } from "react";
import ArticleSnippet from "./common/ArticleSnippet";

const Home: React.FC = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/v1/article")
      .then((r) => r.json())
      .then(setArticles);
  }, []);

  return (
    <main>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">2Kb Collective</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Coding Courses, Tutorials and More</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
        {articles.length} Articles available
        {/* If there are articles available, list them. */}
        {articles.length > 0 &&
          articles.map((article) => (
            <ArticleSnippet article={article} />
          ))}
      </div>
    </main>
  );
};

export default Home;
