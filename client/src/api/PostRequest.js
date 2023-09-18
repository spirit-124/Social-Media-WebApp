import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8008" });

export const getTimelinePosts = (id) => API.get(`/api/v1/post/${id}/timeline`);
