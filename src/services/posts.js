//API
import { api } from "../api";

export const getPosts = () => {
  return api.get("/posts");
};

export const createPost = (data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.post(`/posts`, data, options);
};

export const getPostsByUserId = (id) => {
  return api.get(`/posts/user/${id}`);
};

export const updatePost = (id, data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.put(`/posts/${id}`, data, options);
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
