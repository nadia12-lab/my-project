import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Change this to your actual API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
export const maxDuration = 60; // seconds, max 60 on Pro plan
export const runtime = "nodejs"; // ensure Node.js runtime

export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
