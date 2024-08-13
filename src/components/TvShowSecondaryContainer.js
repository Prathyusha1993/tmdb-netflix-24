import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const TvShowSecondaryContainer = () => {
  const shows = useSelector(store => store.tv)
  return (
    shows.arrivingTodayShows && (
      <div className='bg-black'>
      <MovieList title={'Airing Today'} movies={shows.arrivingTodayShows} />
      <MovieList title={'Top Rated Shows'} movies={shows.topRatedShow} />
      <MovieList title={'Familiar Tv Favorites'} movies={shows.popularShow} />
      <MovieList title={'Your Next Watch'} movies={shows.nextWatchShow} />
    </div>
    )
    
  )
}

export default TvShowSecondaryContainer;