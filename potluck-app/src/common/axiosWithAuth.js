import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "", // Need : URL from unit 4
    headers: {
      "Access-Control-Allow-Credentials": true,
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `${token}` 
    }
  });
}

export default axiosWithAuth;