import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8008/api/v1" });

export const uploadImage = (formData) => API.post("/upload/", formData);
export const uploadPost = (formData) => API.post("/post/", formData);
