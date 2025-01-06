import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Request Interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error?.response?.status;
      console.log(status);

      if (status === 401 || status === 403) {
        await logOut(); // Log the user out
        navigate("/login"); // Redirect to login page
      }

      console.error("Interceptor error:", error);
      return Promise.reject(error); // Pass error down the promise chain
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
