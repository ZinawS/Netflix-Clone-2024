import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../utils/axios";
import "./banner.css";
import requests from "../utils/request";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect runs once when the component mounts to fetch a random movie
  useEffect(() => {
    // Async function to fetch top-rated movies from the API
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(requests.fetchTopRatedMovies);
        // Select a random movie from the results
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        // Update state with the selected movie
        setMovie(randomMovie);
      } catch (error) {
        console.error("Couldn't fetch movie", error);
      }
    };
    fetchMovie();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Function to handle play button click and fetch the movie trailer
  const handlePlayClick = async () => {
    // Prevent action if no movie or already loading
    if (!movie || loading) return;

    setLoading(true);
    try {
      // Fetch trailer URL using movie title or name
      const url = await movieTrailer(movie?.title || movie?.name || "", {
        tmdbId: movie.id,
        id: true,
      });
      // Update trailer URL state to show the YouTube video
      setTrailerUrl(url || "");
    } catch (error) {
      console.error("Couldn't fetch trailer", error);
      setTrailerUrl("");
    } finally {
      // Clear loading state after trailer fetch completes
      setLoading(false);
    }
  };

  // Options for the YouTube player (size and autoplay settings)
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div
      className="banner"
      // Dynamically set background image using movie backdrop
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {/* Display movie title or fallback text if not loaded */}
          {movie?.title || movie?.name || "Loading..."}
        </h1>
        <div className="banner-buttons">
          <button
            className="banner-button play"
            onClick={handlePlayClick}
            disabled={loading}
          >
            {/* Show loading text or Play Trailer based on loading state */}
            {loading ? "Loading..." : "Play Trailer"}
          </button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">
          {/* Truncate movie overview to 150 characters or show fallback */}
          {movie?.overview?.substring(0, 150) || "Loading description..."}
        </p>
      </div>

      {/* Conditionally render YouTube player if trailerUrl exists */}
      {trailerUrl && (
        <div className="trailer-container">
          <div className="youtube-wrapper">
            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
          <button
            className="close-trailer-button"
            onClick={() => setTrailerUrl("")}
          >
            Close
          </button>
        </div>
      )}

      <div className="banner-fade" />
    </div>
  );
}

export default Banner;
