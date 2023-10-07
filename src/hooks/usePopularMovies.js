import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addpopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMoviesList = async () => {
    const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const json = await data.json();
    const moviesList = json.results;
    dispatch(addpopularMovies(moviesList));
  };
  useEffect(() => {
    getPopularMoviesList();
  }, []);
};

export default usePopularMovies;
