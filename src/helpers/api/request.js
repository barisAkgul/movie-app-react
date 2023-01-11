import {
  API_KEY,
  MOVIE_DB_BASE_URL,
  movieListAPI,
  PosterSizes,
  MOVIE_DB_IMG_BASE_URL,
  MOVIE_DB_FALLBACK_AVATAR,
  MOVIE_DB_FALLBACK_POSTER,
} from "./constants";
import { movieListApiURL } from "./request_helpers";

const _getMovieApiRequest = async ({ requestEndPoint }) => {
  let response = await fetch(requestEndPoint);
  if (response.ok === false) {
    throw new Error(
      `Fetch failed, please make sure you have a valid API_KEY. Status: ${response.status}. Message: ${response.statusText}.`
    );
  }
  let result = await response.json();
  return result;
};

export const getMovieList = () => {
  return _getMovieApiRequest({ requestEndPoint: movieListApiURL() });
};

export const getSpecificMoviePoster = (size, path) => {
  if (!path) {
    return MOVIE_DB_FALLBACK_POSTER;
  }
  return `${MOVIE_DB_IMG_BASE_URL}/${size}${path}`;
};
