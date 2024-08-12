import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { useDispatch } from 'react-redux';
import { addTmdbSearchResults } from '../utils/gptSlice';

const GPTMovieSuggestion = () => {
  const dispatch = useDispatch();
  const gpt = useSelector(store => store.gpt);
  const {movieResults, movieName} = gpt;
  useEffect(() => {
    return () => {dispatch(addTmdbSearchResults({movieName:null, movieResults:null}))}
   },[]);
   
  if(!movieName){
    return null;
  }

  return (
    <div className='p-4 m-4 bg-black bg-opacity-80 text-white'>
      <div>
        <MovieList key={movieName} title={movieName} movies={movieResults} />
      </div>
    </div>
  )
}

export default GPTMovieSuggestion;