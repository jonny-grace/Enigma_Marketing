import axios from "axios";
export const devBaseurl = "http://localhost:3000";
// export const prodBaseUrl = "https://tadreeb.mozivol.com/api";
const api = axios.create({
  // baseURL: "http://127.0.0.1:8000/api",
  baseURL: devBaseurl,
});
let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
if (token) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
