import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div className="w-full bg-white rounded-sm overflow-hidden">
      <div className="flex flex-col h-full gap-2">
        <div className="relative  w-full overflow-hidden">
          <img
            className="h-44 max-h-44 w-full object-cover object-top"
            src={article.urlToImage}
          />
        </div>
        <div className="flex flex-col gap-2 p-4 flex-grow">
          <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
          <p className="text-gray-700 text-sm">{article.description}</p>
        </div>
        <div className="items-end px-4 justify-end justify-self-end pb-1">
          Author:{" "}
          <span className="font-bold text-emerald-800">{article.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
