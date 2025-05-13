// src/api/requests.js
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  // 🔥 Trending
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`, // Maps to "Trending Now"
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}`,

  // 🍿 Netflix Originals
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // Maps to "Netflix Originals"

  // 🆕 New Releases
  fetchNewReleases: `/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&release_date.lte=${new Date().toISOString().split("T")[0]}`, // Maps to "New Releases" (movies released recently)

  // 🎞️ Movies by Genre
  fetchActionAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28,12`, // Maps to "Action & Adventure Movies" (Action=28, Adventure=12)
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Maps to "Comedy Movies"
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // Maps to "Horror Movies"
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // Maps to "Romance Movies"
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Maps to "Documentaries"
  fetchFamilyKidsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`, // Maps to "Family & Kids Movies" (Family=10751)
  fetchAnimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`, // Maps to "Anime Movies" (Animation=16, approximation for anime)
  fetchSciFiFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878,14`, // Maps to "Sci-Fi & Fantasy Movies" (Sci-Fi=878, Fantasy=14)
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`, // Maps to "Thriller Movies" (Thriller=53)
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`, // Maps to "Drama Movies"
  fetchCrimeMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80,9648`, // Maps to "Crime & Mystery Movies" (Crime=80, Mystery=9648)
  fetchStandUpComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_keywords=stand-up`, // Maps to "Stand-Up Comedy" (approximation using Comedy + keyword)
  fetchInternationalMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=hi,es,fr,ja,ko`, // Maps to "International Movies" (non-English languages like Hindi, Spanish, French, Japanese, Korean)

  // 📺 Series by Genre
  fetchDramaTV: `/discover/tv?api_key=${API_KEY}&with_genres=18`, // Maps to "Drama Series"
  fetchSciFiFantasyTV: `/discover/tv?api_key=${API_KEY}&with_genres=10765`, // Maps to "Sci-Fi & Fantasy Series" (Sci-Fi & Fantasy TV=10765)
  fetchCrimeThrillerTV: `/discover/tv?api_key=${API_KEY}&with_genres=80,53`, // Maps to "Crime & Thriller Series" (Crime=80, Thriller=53)
  fetchRealityTV: `/discover/tv?api_key=${API_KEY}&with_genres=10764`, // Maps to "Reality TV" (Reality=10764)
  fetchKidsTV: `/discover/tv?api_key=${API_KEY}&with_genres=10762`, // Maps to "Kids' TV" (Kids=10762)
  fetchAnimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16`, // Maps to "Anime Series" (Animation=16, approximation for anime)
  fetchLimitedSeries: `/discover/tv?api_key=${API_KEY}&with_type=2`, // Maps to "Limited Series" (type 2 = limited series in TMDB)
  fetchInternationalSeries: `/discover/tv?api_key=${API_KEY}&with_original_language=hi,es,fr,ja,ko`, // Maps to "International Series" (non-English languages)
  fetchBritishTV: `/discover/tv?api_key=${API_KEY}&with_original_language=en&region=GB`, // Maps to "British TV Shows" (English language, UK region)

  // 🎬 Specialty Categories
  fetchInteractiveContent: `/discover/movie?api_key=${API_KEY}&with_keywords=interactive`, // Maps to "Interactive Content" (approximation using keyword)
  fetchAwardWinningFilms: `/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000`, // Maps to "Award-Winning Films" (high-rated, popular films)
  fetchHolidayFavorites: `/discover/movie?api_key=${API_KEY}&with_keywords=christmas,holiday`, // Maps to "Holiday Favorites" (approximation using holiday-related keywords)

  // 🎬 General Movies
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`, // Maps to "Top Rated"
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}`,

  // 📺 General TV Shows
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}`,
  fetchOnTheAirTV: `/tv/on_the_air?api_key=${API_KEY}`,
  fetchAiringTodayTV: `/tv/airing_today?api_key=${API_KEY}`,

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
