import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../utils/axios";

function Row({ title, fetchUrl}) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setVideos(response.data.results || []);
      } catch (error) {
        console.error(`Failed to fetch videos for ${title}:`, error.message);
      }
    };

    fetchVideos();
  }, [fetchUrl, title]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {videos.map((video) => (
          <div key={video.id} className="poster-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${video.poster_path ? video.poster_path : video.backdrop_path}`}
              alt={video.name || video.title}
              className="row-poster"
            />
            <div className="video-info">
              <h3>{video.name || video.title}</h3>
              <p>{video.overview?.slice(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
