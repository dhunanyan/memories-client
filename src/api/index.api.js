import axios from "axios";

const url = "https://memories-mern-fullstack-app.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (currentId, updatedPost) =>
  axios.patch(`${url}/${currentId}`, updatedPost);
export const deletePost = (currentId) => axios.delete(`${url}/${currentId}`);
export const likePost = (currentId) =>
  axios.patch(`${url}/${currentId}/likePost`);
