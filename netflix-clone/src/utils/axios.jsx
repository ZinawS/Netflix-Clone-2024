import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_API_KEY, 
  },
});

export default instance;

// https://api.themoviedb.org/3/trending/all/week?api_key=1b04c15be7e16de4e1833f363f8cac55