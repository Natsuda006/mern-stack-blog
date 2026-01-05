import React, { useEffect, useState } from "react";
import PostService from "../../services/post.service";
import Post from "../components/post";
import Swal from "sweetalert2";
const Home = () => {
 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostService.getAllPosts();
        if (response.status === 200) {
          setPosts(response.data);
      }
    }catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || "Failed to load posts",
        icon: "error"
      });
    }
    };
    fetchPosts();
  }, []);


  return (
      <div className="space-y-4">
        {posts.length > 0 && posts.map((post,index)=> <Post key={index}index={index}{...post} />)}
        {posts.length === 0 && <h1> No posts available.</h1>}
        </div>
   
  );
};

export default Home;