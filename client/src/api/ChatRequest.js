import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const userChat = (id) => API.get(`/api/v1/chat/${id}`);
