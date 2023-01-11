import { API_KEY, MOVIE_DB_BASE_URL } from "./constants";

export const movieListApiURL = () => {
  return `${MOVIE_DB_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
};
