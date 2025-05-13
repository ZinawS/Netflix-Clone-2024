import React from "react";
import Row from "../Row/Row";
import requests from "../../utils/request";

function Home() {
  return (
    <div>
      
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="New Releases" fetchUrl={requests.fetchNewReleases} />
      <Row
        title="Action & Adventure Movies"
        fetchUrl={requests.fetchActionAdventureMovies}
      />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row
        title="Family & Kids Movies"
        fetchUrl={requests.fetchFamilyKidsMovies}
      />
      <Row title="Anime Movies" fetchUrl={requests.fetchAnimeMovies} />
      <Row
        title="Sci-Fi & Fantasy Movies"
        fetchUrl={requests.fetchSciFiFantasyMovies}
      />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row
        title="Crime & Mystery Movies"
        fetchUrl={requests.fetchCrimeMysteryMovies}
      />
      <Row title="Stand-Up Comedy" fetchUrl={requests.fetchStandUpComedy} />
      <Row
        title="International Movies"
        fetchUrl={requests.fetchInternationalMovies}
      />
      <Row title="Drama Series" fetchUrl={requests.fetchDramaTV} />
      <Row
        title="Sci-Fi & Fantasy Series"
        fetchUrl={requests.fetchSciFiFantasyTV}
      />
      <Row
        title="Crime & Thriller Series"
        fetchUrl={requests.fetchCrimeThrillerTV}
      />
      <Row title="Reality TV" fetchUrl={requests.fetchRealityTV} />
      <Row title="Kids' TV" fetchUrl={requests.fetchKidsTV} />
      <Row title="Anime Series" fetchUrl={requests.fetchAnimeSeries} />
      <Row title="Limited Series" fetchUrl={requests.fetchLimitedSeries} />
      <Row
        title="International Series"
        fetchUrl={requests.fetchInternationalSeries}
      />
      <Row title="British TV Shows" fetchUrl={requests.fetchBritishTV} />
      <Row
        title="Interactive Content"
        fetchUrl={requests.fetchInteractiveContent}
      />
      <Row
        title="Award-Winning Films"
        fetchUrl={requests.fetchAwardWinningFilms}
      />
      <Row
        title="Holiday Favorites"
        fetchUrl={requests.fetchHolidayFavorites}
      />
    </div>
  );
}

export default Home;
