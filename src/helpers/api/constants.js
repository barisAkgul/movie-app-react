export const API_KEY = process.env.REACT_APP_API_KEY;
export const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3";
export const MOVIE_DB_IMG_BASE_URL = "http://image.tmdb.org/t/p";
export const MOVIE_DB_FALLBACK_AVATAR =
  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";

export const MOVIE_DB_FALLBACK_POSTER =
  "https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png";

const movieListAPI =
  "https://api.themoviedb.org/3/movie/popular?api_key=b40509d9062eb9558fab581929ad19fb&language=en-US&page=1";

export const PosterSizes = {
  XS: "x45",
  SM: "w300",
  MD: "w500",
  XL: "original",
};
