import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTmdbSearchResults } from '../utils/gptSlice';

const GPTSearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector(store => store.config.lang);
    const searchText =useRef(null);

    //search movie in tmdb api
    const searchMovieTmdb = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log('json result', json.results);
        dispatch(addTmdbSearchResults({movieName: movie, movieResults: json.results}));
    }

    const handleGptSearchClick = async () => {
         console.log(searchText.current.value);
        searchMovieTmdb(searchText.current.value);
    };
     
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center' >
        <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-1/2 bg-black grid grid-cols-12'>
            <input 
            ref = {searchText}
            type='text' 
            className='p-4 m-4 col-span-9 rounded-lg' 
            placeholder={lang[langKey].gptSearchPlaceholder}

             />
            <button 
            className='py-2 px-4 m-4 col-span-3 bg-red-700 rounded-lg text-white' 
            onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar;
