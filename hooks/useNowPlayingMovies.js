const { useEffect } = require("react");
const { API_OPTIONS } = require("@/redux/constants");
const { useDispatch } = require("react-redux");
const { addNowPlayingMovies } = require("@/redux/moviesSlice");

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
