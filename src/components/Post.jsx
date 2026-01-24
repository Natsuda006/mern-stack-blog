import React from "react";

const Post = ({ title, author, summary, cover, createdAt, _id, index = 0 }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`card card-side bg-base-100 shadow-sm ${isEven ? "flex-row" : "flex-row-reverse"
        }`}
    >
      <figure className="w-full md:w-1/2">
        <img src={cover} alt="Post Cover" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className="font-semibold text-primary">
            <a href={`/author/${author._id}`} className="hover:underline">
              @{author.username}
            </a>
          </span>
          <span>•</span>
          <time>{new Date(createdAt).toLocaleDateString()}</time>
        </div>
        <p>{summary}</p>
        <div className="card-actions justify-end mt-4">
          <a href={`/post/${_id}`} className="btn btn-primary btn-sm md:btn-md gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
