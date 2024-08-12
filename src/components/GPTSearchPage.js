import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { LOGIN_BACKGROUND_IMAGE } from '../utils/constants';

const GPTSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover md:h-full' src={LOGIN_BACKGROUND_IMAGE} alt='logo' />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>

  )
}

export default GPTSearch;