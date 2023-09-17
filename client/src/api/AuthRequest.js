import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8008" });

export const logIn = (FormData) => API.post("/api/v1/auth/login", FormData);
export const signUp = (FormData) => API.post("/api/v1/auth/register", FormData);
