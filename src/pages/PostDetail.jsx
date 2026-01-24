import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";
import PostService from "../services/post.service";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const [post, setPost] = useState({
    _id: "",
    title: "",
    createdAt: "",
    author: {},
    content: "",
    cover: ""
  });
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await PostService.getById(id);
        console.log(response);

        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        Swal.fire({
          title: "Post Detail",
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete Post?",
      text: "Are you sure you want to delete this post? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel"
    });

    if (result.isConfirmed) {
      try {
        const response = await PostService.deletePost(id);
        if (response.status === 200) {
          await Swal.fire({
            title: "Deleted!",
            text: "Post has been deleted successfully",
            icon: "success"
          });
          navigate("/");
        }
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
          title: "Error",
          text: error?.response?.data?.message || error.message || "Failed to delete post",
          icon: "error"
        });
      }
    }
  };
  return (
    <div className="post-page min-h-full min-w-full flex flex-col items-center justify-start p-4 pt-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
        {post?.cover && (
          <div className="w-full h-96 overflow-hidden">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-grey-800">{post?.title}</h1>
          <div className="text-grey-600 mb-6 text-center">
            <time className="block mb-2">{post?.createdAt}</time>
            <div className="author mb-2">
              By{" "}
              <span className="text-blue-500">
                @
                <a href={`/author/${post?.author?._id}`}>
                  {post?.author?.username}
                </a>
              </span>
            </div>
            {userInfo?.id === post?.author?._id && (
              <div className="edit-row mb-4 text-center flex items-center justify-center gap-2">
                <a className="btn btn-warning" href={`/edit/${post?._id}`}>
                  Edit
                </a>
                <button className="btn btn-error" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            )}
          </div>
          <div
            className="content text-grey-700 prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post?.content || "")
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
