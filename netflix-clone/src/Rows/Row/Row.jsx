
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./row.css";
import axios from "../../utils/axios";

function Row({ title, fetchUrl }) {
  const [videos, setVideos] = useState([]);
  const [youtubeKey, setYoutubeKey] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setVideos(response.data.results || []);
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      }
    };
    fetchVideos();
  }, [fetchUrl]);

  const handleVideoClick = async (video) => {
    if (isLoading) return;
    if (selectedVideoId === video.id && youtubeKey) {
      setYoutubeKey(null);
      setSelectedVideoId(null);
      return;
    }

    setIsLoading(true);
    try {
      const mediaType = video.media_type || "movie";
      const response = await axios.get(`/${mediaType}/${video.id}/videos`);

      // Row-specific: Allow any YouTube video (not just trailers)
      const youtubeVideo = response.data.results.find(
        (v) => v.site === "YouTube" && v.type === "Trailer"
      );

      setYoutubeKey(youtubeVideo?.key || null);
      setSelectedVideoId(video.id);
    } catch (error) {
      console.error("Failed to fetch video:", error);
      setYoutubeKey(null);
      setSelectedVideoId(video.id);
    } finally {
      setIsLoading(false);
    }
  };

  const youtubeOpts = {
    height: "300",
    width: "80%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {videos.map((video) => (
          <div key={video.id} className="poster-wrapper">
            {selectedVideoId === video.id ? (
              <div className="trailer-container">
                {youtubeKey ? (
                  <>
                    <YouTube videoId={youtubeKey} opts={youtubeOpts} />
                    <button
                      className="close-trailer-button"
                      onClick={() => {
                        setYoutubeKey(null);
                        setSelectedVideoId(null);
                      }}
                    >
                      Close
                    </button>
                  </>
                ) : (
                  <div className="no-trailer">
                    No video available
                    <button
                      className="close-trailer-button"
                      onClick={() => setSelectedVideoId(null)}
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="poster-content">
                <img
                  src={`${baseImageUrl}${video.poster_path || video.backdrop_path}`}
                  alt={video.name || video.title}
                  className="row-poster"
                  onClick={() => handleVideoClick(video)}
                />
                <div className="video-info">
                  <h3>{video.name || video.title}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoClick(video);
                    }}
                  >
                    {isLoading && selectedVideoId === video.id
                      ? "Loading..."
                      : "Play Video"}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
