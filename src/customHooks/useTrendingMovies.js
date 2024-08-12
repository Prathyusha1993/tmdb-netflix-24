
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.trendingMovies);

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
        const jsonData = await data.json();
         console.log('trending movies', jsonData.results);
         dispatch(addTrendingMovies(jsonData.results));
    };

    useEffect(() => {
        if(!trendingMovies) {
        getTrendingMovies();
        }
    }, []);
}

export default useTrendingMovies;