import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
        const trailerVideo = useSelector(store => store.movies.trailerVideo);

    //make a api call with movieId to get movies associated with that id
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const jsonData = await data.json();
        const filterData = jsonData.results.filter(video => video.type === 'Trailer');
        const trailer = filterData.length ? filterData[0] : jsonData.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        if(!trailerVideo){
        getMovieVideos();
        }
    },[])
}

export default useMovieTrailer;