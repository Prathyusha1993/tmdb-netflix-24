import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    // console.log('movielist for now playing', movies);
  return (
    <div className='px-6 text-white'>
        <h1 className='py-4 text-lg md:text-3xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            
            <div className='flex'>
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} posterPath = {movie.poster_path} title={movie.title} overview={movie.overview} releaseDate={movie.release_date} />
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default MovieList;