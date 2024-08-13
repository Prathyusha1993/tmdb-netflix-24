import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { addArrivingTodayShows } from "../utils/tvShowSlice";
import { useDispatch, useSelector } from "react-redux";

const useArrivingTodayTvShows = () => {
    const dispatch = useDispatch();

    const arrivingTodayShows = useSelector(store => store.tv.arrivingTodayShows);

    const getArrivingTodayTvShows =async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        console.log('arriving today tv shows', jsonData.results);
        dispatch(addArrivingTodayShows(jsonData.results));
    };

    useEffect(() => {
        if(!arrivingTodayShows){
            getArrivingTodayTvShows();
        }
    },[]);
}

export default useArrivingTodayTvShows;