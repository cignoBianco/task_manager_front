import axios from "axios";

export const api = axios.create({
  baseURL:  "http://localhost:8005/api", //process.env.NEXT_PUBLIC_API_URL ||
  withCredentials: true,
});