import React from 'react'
import Header from './Header';
import TvShowMainContainer from './TvShowMainContainer';
import TvShowSecondaryContainer from './TvShowSecondaryContainer';

const TvShows = () => {
  return (
    <div>
        {/* <h1 className='text-white bg-black'>this is tv showpage</h1> */}
        <TvShowMainContainer />
        <TvShowSecondaryContainer />
    </div>
  )
}

export default TvShows;