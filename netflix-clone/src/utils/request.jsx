import React from "react";


// // src/api/requests.js
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  // 🎞️ Movies by Category (common genres by ID)
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,

  // 🔥 Trending
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}`,

  // 🎬 Movies
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}`,

  // 📺 TV Shows
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}`,
  fetchOnTheAirTV: `/tv/on_the_air?api_key=${API_KEY}`,
  fetchAiringTodayTV: `/tv/airing_today?api_key=${API_KEY}`,

  // 🍿 Netflix Originals
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  // 🎭 Genres
  fetchMovieGenres: `/genre/movie/list?api_key=${API_KEY}`,
  fetchTVGenres: `/genre/tv/list?api_key=${API_KEY}`,

  // 🕵️ Search
  searchMulti: (query) => `/search/multi?api_key=${API_KEY}&query=${query}`,
  searchMovies: (query) => `/search/movie?api_key=${API_KEY}&query=${query}`,
  searchTV: (query) => `/search/tv?api_key=${API_KEY}&query=${query}`,

  // 🧭 Discover by Genre ID
  discoverMoviesByGenre: (genreId) =>
    `/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
  discoverTVByGenre: (genreId) =>
    `/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`,

  // 🎥 Details
  fetchMovieDetails: (movieId) => `/movie/${movieId}?api_key=${API_KEY}`,
  fetchTVDetails: (tvId) => `/tv/${tvId}?api_key=${API_KEY}`,

  // 📽️ Videos
  fetchMovieVideos: (movieId) => `/movie/${movieId}/videos?api_key=${API_KEY}`,
  fetchTVVideos: (tvId) => `/tv/${tvId}/videos?api_key=${API_KEY}`,

  // 👤 People
  fetchPersonDetails: (personId) => `/person/${personId}?api_key=${API_KEY}`,
  fetchPersonCombinedCredits: (personId) =>
    `/person/${personId}/combined_credits?api_key=${API_KEY}`,

  // 🌍 Region Filtering
  discoverMoviesByRegion: (regionCode) =>
    `/discover/movie?api_key=${API_KEY}&region=${regionCode}`,
};

export default requests;
