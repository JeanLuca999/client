//API
import { api } from "../api";

export const createUser = async (data) => {
  return api.post(`/register`, data);
};
