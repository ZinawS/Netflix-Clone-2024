import React, { useEffect, useState, useRef } from "react";
import YouTube from "react-youtube";
import "./row.css";
import axios from "../../utils/axios";

function Row({ title, fetchUrl }) {
  const [videos, setVideos] = useState([]);
  const [trailerId, setTrailerId] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const playerRef = useRef(null);
  const trailerContainerRef = useRef(null);

  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setVideos(response.data.results || []);
      } catch (error) {
        console.error("Failed to fetch videos:", error.message);
      }
    };
    fetchVideos();
  }, [fetchUrl]);

  const fetchTrailer = async (videoId) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/movie/${videoId}/videos`);
      const trailer = response.data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailerId(trailer?.key || null);
      setSelectedVideoId(videoId);
    } catch (error) {
      console.error(`Failed to fetch trailer:`, error.message);
      setTrailerId(null);
      setSelectedVideoId(videoId);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTrailerToggle = (videoId) => {
    if (isLoading) return;
    if (selectedVideoId === videoId && trailerId) {
      setTrailerId(null);
      setSelectedVideoId(null);
    } else {
      fetchTrailer(videoId);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (trailerContainerRef.current?.contains(e.target)) return;
      if (selectedVideoId) {
        setTrailerId(null);
        setSelectedVideoId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [selectedVideoId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        !entry.isIntersecting &&
        selectedVideoId &&
        trailerId &&
        setSelectedVideoId(null),
      { threshold: 0.1 }
    );
    if (trailerContainerRef.current)
      observer.observe(trailerContainerRef.current);
    return () => observer.disconnect();
  }, [selectedVideoId, trailerId]);

  const youtubeOpts = {
    height: "300",
    width: "80%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {videos.map((video) => (
          <div key={video.id} className="poster-wrapper">
            <div
              className="poster-container"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVideoId === video.id ? (
                <div className="trailer-container" ref={trailerContainerRef}>
                  {trailerId ? (
                    <>
                      <YouTube
                        videoId={trailerId}
                        opts={youtubeOpts}
                        onReady={(e) => {
                          playerRef.current = e.target;
                          e.target.playVideo();
                        }}
                        onError={(e) =>
                          console.error("YouTube player error:", e)
                        }
                      />
                      <button
                        className="close-trailer-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTrailerToggle(video.id);
                        }}
                      >
                        Close
                      </button>
                    </>
                  ) : (
                    <div
                      className="no-trailer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      No trailer available
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <img
                    src={`${baseImageUrl}${video.poster_path || video.backdrop_path}`}
                    alt={video.name || video.title}
                    className="row-poster"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTrailerToggle(video.id);
                    }}
                  />
                  <div className="video-info">
                    <h3>{video.name || video.title}</h3>
                    <p>{video.overview?.slice(0, 80)}...</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTrailerToggle(video.id);
                      }}
                    >
                      Play Trailer
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
