import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedTvShow } from "../utils/tvShowSlice";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedTvShows = () => {
    const dispatch = useDispatch();

    const topRatedShow = useSelector(store => store.tv.topRatedShow);

    const getTopRatedShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        console.log('top rated tv show', jsonData.results);
        dispatch(addTopRatedTvShow(jsonData.results));
    };

    useEffect(() => {
        if (!topRatedShow) {
            getTopRatedShows();
        }
    }, []);
}

export default useTopRatedTvShows;