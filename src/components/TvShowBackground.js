import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const TvShowBackground = ({posterPath, backdropPath}) => {
  return (
    <div className='px-9 rounded-lg py-9' >
        {/* <img src={IMG_CDN_URL+ backdropPath} alt='showCard' /> */}
        <img style={{width:'100%', height:'50vw', objectFit:'cover'}} src={IMG_CDN_URL+ posterPath} alt='showCard' />
    </div>
  )
}

export default TvShowBackground;