import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../utils/axios";
import "./banner.css";
import requests from "../utils/request";

function Banner() {
  // State variables
  const [movie, setMovie] = useState({});
  const [youtubeKey, setYoutubeKey] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Base URL for movie images
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const bannerImageUrl = requests.fetchTopRatedMovies; 

  // Fetch a random movie when component loads
  useEffect(() => {
    const  fetchRandomMovie= async()=> {
      try {
        const response = await axios.get(bannerImageUrl);
        const movies = response.data.results;

        // Select random movie/show from results
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      } catch (err) {
        console.error("Error fetching banner content:", err);
        // Fallback to trending if Netflix originals fails
        try {
          const fallback = await axios.get(requests.fetchTrending);
          setMovie(
            fallback.data.results[
              Math.floor(Math.random() * fallback.data.results.length)
            ]
          );
        } catch (fallbackError) {
          console.error("Fallback fetch failed:", fallbackError);
        }
      }
    }

    fetchRandomMovie();
  }, [bannerImageUrl]);

  // Fetch and play any available YouTube video - FIXED THIS FUNCTION
  const handlePlayVideo = async () => {
    if (!movie.id || isLoading) return;

    setIsLoading(true);
    try {
      // Fixed endpoint construction
      const mediaType = movie.media_type || "movie"; // Default to movie if undefined
      const endpoint = `/${mediaType}/${movie.id}/videos`;

      const response = await axios.get(endpoint);
    

      // Find first available YouTube video
      const youtubeVideo = response.data.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer"
      );

      setYoutubeKey(youtubeVideo?.key || null);
      setShowPlayer(true);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setYoutubeKey(null);
      setShowPlayer(true);
    } finally {
      setIsLoading(false);
    }
  };

  // YouTube player settings
  const youtubeOpts = {
    height: "450",
    width: "80%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };

  // Shorten long descriptions
  const description = movie?.overview
    ? movie.overview.length > 150
      ? `${movie.overview.substring(0, 150)}...`
      : movie.overview
    : "Loading description...";

  return (
    <div
      className="banner"
      style={{
        backgroundImage: showPlayer
          ? "none"
          : `url("${baseUrl}${movie?.backdrop_path}")`,
      }}
    >
      {showPlayer ? (
        <div className="trailer-container">
          {youtubeKey ? (
            <div className="youtube-wrapper">
              <YouTube videoId={youtubeKey} opts={youtubeOpts} />
            </div>
          ) : (
            <div className="no-trailer">No video available for this title</div>
          )}
          <button
            className="close-trailer-button"
            onClick={() => {
              setShowPlayer(false);
              setYoutubeKey(null);
            }}
          >
            Close
          </button>
        </div>
      ) : (
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.title ||
              movie?.name ||
              movie?.original_name ||
              "Loading..."}
          </h1>

          <div className="banner-buttons">
            <button
              className="banner-button play"
              onClick={handlePlayVideo}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Play Video"}
            </button>
            <button className="banner-button">My List</button>
          </div>

          <p className="banner-description">{description}</p>
        </div>
      )}

      <div className="banner-fade" />
    </div>
  );
}

export default Banner;
