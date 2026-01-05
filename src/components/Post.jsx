import React from 'react';
import { Link } from "react-router-dom";

const Post = ({  title, cover, author, createdAt, summary, _id, index = 0 }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`card card-side bg-base-100 shadow-sm hover:shadow-md transition duration-200 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      <figure className="md:w-1/2 flex items-center overflow-hidden">
        <Link to={`/post/${_id}`} className="w-full h-full">
          <img src={cover} alt={title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
        </Link>
      </figure>

      <div className="card-body md:w-1/2">
        <h2 className="card-title leading-snug">
          <Link to={`/post/${_id}`} className="hover:text-blue-600 transition-colors">
            {title}
          </Link>
        </h2>

        <p className="text-sm text-gray-500 mb-2">
          By <Link
            to={`/author/${author?._id || author}`}
            className="text-blue-600 hover:underline font-medium"
          >
            {author?.username || author}
          </Link>{" "}
          • {createdAt}
        </p>

        <p className="text-gray-600 line-clamp-3 mb-4">{summary}</p>

        {/* Optional: Read More Button */}
        <div className="card-actions justify-end">
          <Link to={`/post/${_id}`} className="btn btn-sm btn-outline btn-primary">
            Read More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Post;

