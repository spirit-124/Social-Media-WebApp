import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const getTimelinePosts = (id) => API.get(`/api/v1/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`/api/v1/post/${id}/like`, { userId: userId });
