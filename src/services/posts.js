//API
import { api } from "../api";

export const getPosts = () => {
  return api.get("/posts");
};

export const createPost = (data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.post(`/posts`, data, options);
};
