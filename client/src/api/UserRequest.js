import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000/api/v1" });

export const getUser = (userId) => API.get(`/users/${userId}`);
export const updateUser = (userId, formData) =>
  API.put(`/users/${userId}`, formData);
