import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
