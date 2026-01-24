import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Post from "../components/Post";
import PostService from "../services/post.service";
import Swal from "sweetalert2";

const Author = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostService.getByAuthorId(id);
        if (response.status === 200) {
          setPosts(response.data);
          if (response.data.length > 0) {
            setAuthorName(response.data[0].author.username);
          }
        }
      } catch (error) {
        Swal.fire({
          title: "Author Page",
          text: error?.response?.data?.message || error?.message,
          icon: "error",
        });
      }
    };
    fetchPosts();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-base-200 p-8 rounded-xl shadow-md mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-base-content">
          Posts by <span className="text-primary">@{authorName || "Author"}</span>
        </h1>
      </div>

      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            // Using index to maintain alternating layout if Post component supports it
            <div key={index} className="w-full">
              <Post index={index} {...post} />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <h2 className="text-xl">No posts found for this author.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Author;
