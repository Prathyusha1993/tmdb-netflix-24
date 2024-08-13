import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import useTrendingMovies from '../customHooks/useTrendingMovies';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';
import TvShows from './TvShows';
import useArrivingTodayTvShows from '../customHooks/useArrivingTodayTvShows';
import useYourNextWatchShow from '../customHooks/useYourNextWatchShow';
import usePopularTvShows from '../customHooks/usePopularTvShows';
import useTopRatedTvShows from '../customHooks/useTopRatedTvShows';

const Browse = () => {
    const showGptSearchView = useSelector(store => store.gpt.showGptSearch);
    const showTvShowsView = useSelector(store => store.tv.showTvShows);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
 useTrendingMovies();
 useArrivingTodayTvShows();
 useYourNextWatchShow();
 usePopularTvShows();
 useTopRatedTvShows();

  return (
    <div>
        <Header />
        {showGptSearchView ? (<GPTSearchPage />) : showTvShowsView ? (<TvShows />) : (
            <>
            <MainContainer />
            <SecondaryContainer />
            </>
        )}
    </div>
  )
}

export default Browse;


        {/* 
        main video container
            -video bg
            -video title
        secondary container
            -movie lists with category * n
                -movie cards * n
         */}