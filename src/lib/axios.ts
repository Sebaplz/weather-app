import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://weatherapi-com.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY as string,
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  },
});

export default axiosInstance;
