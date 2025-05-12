import React, { useEffect, useState } from "react";
import axios from  "../utils/axios"
import "./banner.css";
import requests from "../utils/request"; // assumes you have a requests.js file

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length
      );
      console.log(request);
      setMovie(request.data.results[randomIndex]);
    }
    fetchData();
  }, []);
  const baseUrl1 = "https://image.tmdb.org/t/p/original"
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${baseUrl1}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <p className="banner_description">
          {movie?.overview?.length > 150
            ? movie.overview.substr(0, 150) + "..."
            : movie.overview}
        </p>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
