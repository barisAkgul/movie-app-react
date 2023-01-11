import { API_KEY } from "helpers/api/constants";
import { getMovieList, getSpecificMoviePoster } from "../helpers/api/request";
import React, { useState, useEffect } from "react";

const Test = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList()
      .then((Promise) => {
        setMovies(Promise.results);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  console.log(movies);
  console.log("API_KEY: " + API_KEY);
  return <>Test Component</>;
};

export default Test;
