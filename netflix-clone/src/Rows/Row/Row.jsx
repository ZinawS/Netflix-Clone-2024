import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../utils/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./row.css";

function Row({ title, fetchUrl, isFirstRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loadingId, setLoadingId] = useState(null);
  const [errorImages, setErrorImages] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(fetchUrl);
        setMovies(data.results);
      } catch (error) {
        console.error("Couldn't fetch movies", error);
      }
    };
    fetchMovies();
  }, [fetchUrl]);

  const handleMovieClick = async (movie) => {
    if (loadingId === movie.id) return;

    setLoadingId(movie.id);
    try {
      const url = await movieTrailer(movie?.title || movie?.name || "", {
        tmdbId: movie.id,
        id: true,
      });
      setTrailerUrl(url || "");
    } catch (error) {
      console.error("Couldn't fetch trailer", error);
      setTrailerUrl("");
    } finally {
      setLoadingId(null);
    }
  };

  const handleImageError = (movieId) => {
    setErrorImages((prev) => ({ ...prev, [movieId]: true }));
  };

  const getImageUrl = (movie) => {
    // Try poster first
    if (movie.poster_path && !errorImages[movie.id]) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    // Then try backdrop
    if (movie.backdrop_path) {
      return `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    }
    // Final fallback to a sophisticated placeholder
    return null;
  };

  const opts = {
    height: "300",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className={`row ${isFirstRow ? "first-row" : ""}`}>
      <h2 className="row-title">{title}</h2>

      <div className="row-posters">
        {movies?.map((movie) => {
          const imageUrl = getImageUrl(movie);
          return (
            <div
              key={movie.id}
              className={`poster-wrapper ${isFirstRow ? "" : "square-poster"}`}
            >
              <div className="poster-container">
                {imageUrl ? (
                  <LazyLoadImage
                    src={imageUrl}
                    alt={movie.title || movie.name}
                    className={`row-poster ${isFirstRow ? "" : "square-image"}`}
                    onClick={() => handleMovieClick(movie)}
                    effect="blur"
                    onError={() => handleImageError(movie.id)}
                    threshold={100}
                  />
                ) : (
                  <div className="placeholder-poster">
                    <div className="placeholder-content">
                      <span className="placeholder-text">
                        {movie.title || movie.name || "No Image"}
                      </span>
                    </div>
                  </div>
                )}
                {loadingId === movie.id && (
                  <div className="video-info">Loading...</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

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
