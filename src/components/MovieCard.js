import React, {useState} from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath, title, overview, releaseDate, IMDBRating, backdropPath}) => {
  const [showDetails, setShowDetails] = useState(false);
  if(!posterPath){
    return null;
  };

  const handleImageDetails = () => {
    setShowDetails(!showDetails);
  }
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img onClick={handleImageDetails} src={IMG_CDN_URL+ posterPath} alt='Movie Card' />
        {showDetails && (
          <div className='absolute left-0 right-0 m-auto bg-sky-400 hover:bg-sky-700 w-[30%] transform-gpu scale-150 text-white rounded-lg'>
            <button onClick={() => setShowDetails(!showDetails)} className='float-right mr-2'>X</button>
            <img src={IMG_CDN_URL+ backdropPath} />
            <h2 className='font-bold'>{title}, Rating:{IMDBRating} </h2>
            <div>
              <button className='bg-white text-black py-1 md:py-0 px-3 md:px-4 text-sm rounded-lg hover:bg-opacity-80'> ▶️Play</button>
              <button className='bg-white ml-1 text-black py-1 md:py-0 px-3 md:px-4 text-sm rounded-lg hover:bg-opacity-80'> ⬇️Download</button>
            </div>
            <p className='text-sm'>{overview}</p>
            {/* <h3>{releaseDate}</h3> */}
          </div>
        )}
    </div>
  )
}

export default MovieCard;