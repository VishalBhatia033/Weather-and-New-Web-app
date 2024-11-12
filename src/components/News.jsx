import React from "react";

function News({ newsData }) {
  return (
    <div className="mt-4">
      <h2 className="text-center py-3 text-xl font-semibold text-slate-700 pb-0">News Headlines</h2>
      {newsData.map((news) => (
        <div key={news.publishedAt} className="mx-4 lg:mx-0 p-5 rounded-lg bg-white shadow-lg mt-4">
          <div className="flex gap-3">
            <img src={news.image} className="w-1/2" alt="" />
            <div className="w-1/2">
              <h3 className="font-semibold text-[0.8rem] ">
                {news.title}.
              </h3>
            </div>
          </div>
          <div className=" mt-2 ">
            <p className="text-gray-600 mb-1  text-[0.8rem] ">
              {news.description}
            </p>
            <div className="flex justify-between mt-1 items-center">
            <a className="text-[0.8rem] text-blue-600 font-semibold" href={news.url}>Read more</a>
            <span className="text-[0.6rem] font-semibold text-gray-600">{news.publishedAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
