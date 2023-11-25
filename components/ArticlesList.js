import React from "react";
import ArticleItem from "./ArticleItem";

const ArticlesList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.map((article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
