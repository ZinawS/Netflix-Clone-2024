import axios from "axios";
const API_KEY = ""


  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  });
  export default  instance