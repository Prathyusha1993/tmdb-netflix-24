import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularTvShow, addYourNextWatchShow } from "../utils/tvShowSlice";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const usePopularTvShows = () => {
    const dispatch = useDispatch();

    const popularShow = useSelector(store => store.tv.popularShow);

    const getPopularShow = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        console.log('Popular show', jsonData.results);
        dispatch(addPopularTvShow(jsonData.results));
    };

    useEffect(() => {
        if (!popularShow) {
            getPopularShow();
        }
    }, []);
}

export default usePopularTvShows;