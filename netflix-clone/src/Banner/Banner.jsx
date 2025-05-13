import React, { useEffect, useState, useRef } from "react";
import YouTube from "react-youtube";
import axios from "../utils/axios";
import "./banner.css";
import requests from "../utils/request";

function Banner() {
  const [movie, setMovie] = useState({});
  const [trailerId, setTrailerId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mediaType, setMediaType] = useState("movie");
  const [isLoading, setIsLoading] = useState(false);
  const playerRef = useRef(null);
  const trailerContainerRef = useRef(null);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const selected = request.data.results[Math.floor(Math.random() * request.data.results.length)];
        setMovie(selected);
        setMediaType(selected.media_type === "tv" ? "tv" : "movie");
      } catch {
        const fallback = await axios.get(requests.fetchPopularMovies);
        setMovie(fallback.data.results[Math.floor(Math.random() * fallback.data.results.length)]);
      }
    }
    fetchData();
  }, []);

  const fetchTrailer = async (mediaId, type) => {
    setIsLoading(true);
    try {
      const endpoint = `/tv/${mediaId}/videos`;
      const response = await axios.get(type === "tv" ? endpoint : `/movie/${mediaId}/videos`);
      const trailer = response.data.results.find(vid => vid.type === "Trailer" && vid.site === "YouTube");
      setTrailerId(trailer?.key || null);
      setIsPlaying(true);
    } catch {
      setTrailerId(null);
      setIsPlaying(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTrailerToggle = () => {
    if (isLoading) return;
    if (isPlaying && trailerId) {
      setTrailerId(null);
      setIsPlaying(false);
    } else if (movie.id) {
      fetchTrailer(movie.id, mediaType);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (trailerContainerRef.current?.contains(e.target)) return;
      if (isPlaying) {
        setTrailerId(null);
        setIsPlaying(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => !entry.isIntersecting && isPlaying && trailerId && setIsPlaying(false),
      { threshold: 0.1 }
    );
    if (trailerContainerRef.current) observer.observe(trailerContainerRef.current);
    return () => observer.disconnect();
  }, [isPlaying, trailerId]);

  const youtubeOpts = {
    height: "450",
    width: "80%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="banner" style={{ backgroundImage: isPlaying ? "none" : `url("${baseUrl}${movie?.backdrop_path}")` }}>
      {isPlaying ? (
        <div className="trailer-container" ref={trailerContainerRef}>
          {trailerId ? (
            <>
              <YouTube
                videoId={trailerId}
                opts={youtubeOpts}
                onReady={(e) => { playerRef.current = e.target; e.target.playVideo(); }}
                onError={(e) => console.error("YouTube player error:", e)}
              />
              <button className="close-trailer-button" onClick={(e) => { e.stopPropagation(); handleTrailerToggle(); }}>
                Close
              </button>
            </>
          ) : (
            <div className="no-trailer" onClick={(e) => e.stopPropagation()}>
              No trailer available
            </div>
          )}
        </div>
      ) : (
        <div className="banner_contents">
          <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name || "Loading..."}</h1>
          <div className="banner_buttons">
            <button className="banner_button play" onClick={(e) => { e.stopPropagation(); handleTrailerToggle(); }}>
              Play
            </button>
            <button className="banner_button">My List</button>
          </div>
          <p className="banner_description">
            {movie?.overview?.length > 150 ? `${movie.overview.substr(0, 150)}...` : movie.overview || "Loading description..."}
          </p>
        </div>
      )}
      <div className="banner_fadeBottom" />
    </div>
  );
}

export default Banner;