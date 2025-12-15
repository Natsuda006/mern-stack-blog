// import React from 'react';

// const Post = ({ postDetail, index = 0 }) => {
//   const { id, title, cover, author, createdAt, summary } = postDetail;
//   const isEven = index % 2 === 0;

//   return (
//     <a
//       href={`/post/${id}`}
//       className={`card card-side bg-base-100 shadow-sm ${isEven ? "flex-row" : "flex-row-reverse"}`}
//       key={id}
//     >
//       <figure className="md:w-1/2 flex items-center">
//         <img src={cover} alt={title} className="w-full h-64 object-cover" />
//       </figure>

//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <p>{author} | {createdAt}</p>
//         <p>{summary}</p>
//       </div>
//     </a>
//   );
// };

// export default Post;
import React from 'react';
import { Link } from "react-router-dom";

const Post = ({ postDetail, index = 0, onDelete }) => {
  const { id, title, cover, author, createdAt, summary } = postDetail;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`card card-side bg-base-100 shadow-sm ${isEven ? "flex-row" : "flex-row-reverse"}`}
      key={id}
    >
      <figure className="md:w-1/2 flex items-center">
        <img src={cover} alt={title} className="w-full h-64 object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <Link to={`/post/${id}`} className="hover:underline">
            {title}
          </Link>
        </h2>

        <p>
          <Link
            to={`/author/${author}`}
            className="text-blue-600 hover:underline"
          >
            {author}
          </Link>{" "}
          | {createdAt}
        </p>

        <p>{summary}</p>

        {/* ⭐ ปุ่ม Edit / Delete */}
        <div className="flex gap-3 mt-4">
          <Link
            to={`/edit/${id}`}
            className="btn btn-sm btn-warning text-white"
          >
            Edit
          </Link>

          <button
            onClick={() => onDelete(id)}
            className="btn btn-sm btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

