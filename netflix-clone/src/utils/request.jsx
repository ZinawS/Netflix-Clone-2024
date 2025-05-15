const requests = {
  // 🔥 Trending
  fetchTrending: `/trending/all/week?`, // Maps to "Trending Now"
  fetchTrendingMovies: `/trending/movie/week?`,
  fetchTrendingTV: `/trending/tv/week?`,

  // 🍿 Netflix Originals
  fetchNetflixOriginals: `/discover/tv?with_networks=213`, // Maps to "Netflix Originals"

  // 🆕 New Releases
  fetchNewReleases: `/discover/movie?sort_by=release_date.desc&release_date.lte=${new Date().toISOString().split("T")[0]}`, // Maps to "New Releases" (movies released recently)

  // 🎞️ Movies by Genre
  fetchActionAdventureMovies: `/discover/movie?with_genres=28,12`, // Maps to "Action & Adventure Movies" (Action=28, Adventure=12)
  fetchComedyMovies: `/discover/movie?with_genres=35`, // Maps to "Comedy Movies"
  fetchHorrorMovies: `/discover/movie?with_genres=27`, // Maps to "Horror Movies"
  fetchRomanceMovies: `/discover/movie?with_genres=10749`, // Maps to "Romance Movies"
  fetchDocumentaries: `/discover/movie?with_genres=99`, // Maps to "Documentaries"
  fetchFamilyKidsMovies: `/discover/movie?with_genres=10751`, // Maps to "Family & Kids Movies" (Family=10751)
  fetchAnimeMovies: `/discover/movie?with_genres=16`, // Maps to "Anime Movies" (Animation=16, approximation for anime)
  fetchSciFiFantasyMovies: `/discover/movie?with_genres=878,14`, // Maps to "Sci-Fi & Fantasy Movies" (Sci-Fi=878, Fantasy=14)
  fetchThrillerMovies: `/discover/movie?with_genres=53`, // Maps to "Thriller Movies" (Thriller=53)
  fetchDramaMovies: `/discover/movie?with_genres=18`, // Maps to "Drama Movies"
  fetchCrimeMysteryMovies: `/discover/movie?with_genres=80,9648`, // Maps to "Crime & Mystery Movies" (Crime=80, Mystery=9648)
  fetchStandUpComedy: `/discover/movie?with_genres=35&with_keywords=stand-up`, // Maps to "Stand-Up Comedy" (approximation using Comedy + keyword)
  fetchInternationalMovies: `/discover/movie?with_original_language=hi,es,fr,ja,ko`, // Maps to "International Movies" (non-English languages like Hindi, Spanish, French, Japanese, Korean)

  // 📺 Series by Genre
  fetchDramaTV: `/discover/tv?with_genres=18`, // Maps to "Drama Series"
  fetchSciFiFantasyTV: `/discover/tv?with_genres=10765`, // Maps to "Sci-Fi & Fantasy Series" (Sci-Fi & Fantasy TV=10765)
  fetchCrimeThrillerTV: `/discover/tv?with_genres=80,53`, // Maps to "Crime & Thriller Series" (Crime=80, Thriller=53)
  fetchRealityTV: `/discover/tv?with_genres=10764`, // Maps to "Reality TV" (Reality=10764)
  fetchKidsTV: `/discover/tv?with_genres=10762`, // Maps to "Kids' TV" (Kids=10762)
  fetchAnimeSeries: `/discover/tv?with_genres=16`, // Maps to "Anime Series" (Animation=16, approximation for anime)
  fetchLimitedSeries: `/discover/tv?with_type=2`, // Maps to "Limited Series" (type 2 = limited series in TMDB)
  fetchInternationalSeries: `/discover/tv?with_original_language=hi,es,fr,ja,ko`, // Maps to "International Series" (non-English languages)
  fetchBritishTV: `/discover/tv?with_original_language=en&region=GB`, // Maps to "British TV Shows" (English language, UK region)

  // 🎬 Specialty Categories
  fetchInteractiveContent: `/discover/movie?with_keywords=interactive`, // Maps to "Interactive Content" (approximation using keyword)
  fetchAwardWinningFilms: `/discover/movie?sort_by=vote_average.desc&vote_count.gte=1000`, // Maps to "Award-Winning Films" (high-rated, popular films)
  fetchHolidayFavorites: `/discover/movie?with_keywords=christmas,holiday`, // Maps to "Holiday Favorites" (approximation using holiday-related keywords)

  // 🎬 General Movies
  fetchTopRatedMovies: `/movie/top_rated?`, // Maps to "Top Rated"
  fetchPopularMovies: `/movie/popular?`,
  fetchUpcomingMovies: `/movie/upcoming?`,
  fetchNowPlayingMovies: `/movie/now_playing?`,

  // 📺 General TV Shows
  fetchPopularTV: `/tv/popular?`,
  fetchTopRatedTV: `/tv/top_rated?`,
  fetchOnTheAirTV: `/tv/on_the_air?`,
  fetchAiringTodayTV: `/tv/airing_today?`,

  // 🎭 Genres
  fetchMovieGenres: `/genre/movie/list?`,
  fetchTVGenres: `/genre/tv/list?`,

  // 🕵️ Search
  searchMulti: (query) => `/search/multi?query=${query}`,
  searchMovies: (query) => `/search/movie?query=${query}`,
  searchTV: (query) => `/search/tv?query=${query}`,

  // 🧭 Discover by Genre ID
  discoverMoviesByGenre: (genreId) => `/discover/movie?with_genres=${genreId}`,
  discoverTVByGenre: (genreId) => `/discover/tv?with_genres=${genreId}`,

  // 🎥 Details
  fetchMovieDetails: (movieId) => `/movie/${movieId}?`,
  fetchTVDetails: (tvId) => `/tv/${tvId}?`,

  // 📽️ Videos
  fetchMovieVideos: (movieId) => `/movie/${movieId}/videos?`,
  fetchTVVideos: (tvId) => `/tv/${tvId}/videos?`,

  // 👤 People
  fetchPersonDetails: (personId) => `/person/${personId}?`,
  fetchPersonCombinedCredits: (personId) =>
    `/person/${personId}/combined_credits?`,

  // 🌍 Region Filtering
  discoverMoviesByRegion: (regionCode) =>
    `/discover/movie?region=${regionCode}`,
};

export default requests;
