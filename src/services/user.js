//API
import { api } from "../api";

export const createUser = (data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.post(`/register`, data, options);
};

export const loginUser = (data) => {
  const options = { headers: { "Content-Type": "application/json" } };
  return api.post(`/login`, data, options);
};
