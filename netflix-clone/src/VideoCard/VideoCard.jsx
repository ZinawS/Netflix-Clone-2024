import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import "./videocard.css";
import requests from "../utils/request";

function VideoCard() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setVideos(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Failed to fetch video data:", error.message);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="row">
      <h2 className="row-title">Netflix Originals</h2>
      <div className="row-posters">
        {videos.map((video) => (
          <div key={video.id} className="poster-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${video.poster_path}`}
              alt={video.name}
              className="row-poster"
            />
            <div className="video-info">
              <h3>{video.name}</h3>
              <p>{video.overview.slice(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCard;
