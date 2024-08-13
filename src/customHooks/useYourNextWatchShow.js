import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addYourNextWatchShow } from "../utils/tvShowSlice";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useYourNextWatchShow = () => {
    const dispatch = useDispatch();

    const nextWatchShow = useSelector(store => store.tv.nextWatchShow);

    const getNextWatchShow = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        console.log('next watch show', jsonData.results);
        dispatch(addYourNextWatchShow(jsonData.results));
    };

    useEffect(() => {
        if (!nextWatchShow) {
            getNextWatchShow();
        }
    }, []);
}

export default useYourNextWatchShow;