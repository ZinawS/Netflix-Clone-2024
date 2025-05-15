import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../utils/axios";
import "./row.css";

function Row({ title, fetchUrl }) {
  // State to store the list of movies fetched from the API
  const [movies, setMovies] = useState([]);
  // State to store the YouTube trailer ID when a movie is clicked
  const [trailerUrl, setTrailerUrl] = useState("");
  // State to track which movie is loading its trailer to show a loading indicator
  const [loadingId, setLoadingId] = useState(null);

  // useEffect runs when the component mounts or fetchUrl changes, fetching movie data
  useEffect(() => {
    // Async function to fetch movies from the API
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(fetchUrl);
        // Update state with fetched movie data
        setMovies(data.results);
      } catch (error) {
        console.error("Couldn't fetch movies", error);
      }
    };
    fetchMovies();
  }, [fetchUrl]); // fetchUrl as dependency ensures useEffect runs when it changes

  // Function to handle movie poster click and fetch its trailer
  const handleMovieClick = async (movie) => {
    // Prevent multiple clicks on the same movie while loading
    if (loadingId === movie.id) return;

    setLoadingId(movie.id);
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
      setLoadingId(null);
    }
  };

  // Options for the YouTube player (size and autoplay settings)
  const opts = {
    height: "300",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          // Use unique key for each movie to help React optimize rendering
          <div key={movie.id} className="poster-wrapper">
            <div className="poster-container">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="row-poster"
                // Trigger trailer fetch on click
                onClick={() => handleMovieClick(movie)}
              />
              {loadingId === movie.id && (
                <div className="video-info">Loading...</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render YouTube player if trailerUrl exists */}
      {trailerUrl && (
        <div className="trailer-container">
          <YouTube videoId={trailerUrl} opts={opts} />
          <button
            className="close-trailer-button"
            onClick={() => setTrailerUrl("")}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Row;
