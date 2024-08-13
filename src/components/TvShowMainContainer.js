import React from 'react'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import TvShowBackground from './TvShowBackground'

const TvShowMainContainer = () => {
  const shows = useSelector(store => store.tv?.arrivingTodayShows);
  if(!shows) return;

  const mainShow = shows[0];

  const {original_name, overview, poster_path, backdrop_path} = mainShow;

  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
      <VideoTitle title={original_name} overview={overview} />
      <TvShowBackground posterPath={poster_path} backdropPath={backdrop_path} />
    </div>
  )
}

export default TvShowMainContainer;