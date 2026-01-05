import api from "./api";
const API_URL = import.meta.env.VITE_POST_URL || "/post";


const getAllPosts = async () => {
  return await api.get(API_URL);
};
const GetById = async (id) => {
  return await api.get(API_URL + "/" + id);
};
const GetByAuthorId = async (id) => {
  return await api.get(`${API_URL}/author/${id}`);
};
const createPost = async (post) => {
  return await api.post(API_URL, post);
};
const updatePost = async (id, post) => {
  return await api.put(`${API_URL} /${id}`, post);
};
const deletePost = async (id) => {
  return await api.delete(`${API_URL} /${id}`);
};

const PostService = {
  createPost,
  getAllPosts,
  GetById,
  GetByAuthorId,
  updatePost,
  deletePost,
};
export default PostService;
