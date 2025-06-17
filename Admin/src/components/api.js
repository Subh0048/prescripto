import axios from "axios";

const backendUrl = import.meta.VITE_BACKEND_URL;

function adminLogin(data) {
  return axios.post(backendUrl + "/api/admin/login", { data });
}

export default adminLogin;
