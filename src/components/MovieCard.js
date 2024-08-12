import React, {useState} from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath, title, overview, releaseDate}) => {
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
          <div>
            <h2>{title}</h2>
            <p>{overview}</p>
            <h3>{releaseDate}</h3>
          </div>
        )}
    </div>
  )
}

export default MovieCard;