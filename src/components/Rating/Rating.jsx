// IMPORTS
import './rating.scss';

// ASSETS
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';

// STYLES


// Ratings. Shows stars from 1 to 5
function Rating({ rating }) { 
   const stars = []; // Create an array to store the stars
 
   for (let i = 1; i <= 5; i++) { // for loop to show stars
      if (i <= rating) { 
         stars.push(<img className='Stars' key={i} src={StarActive} alt="star-filled" />);
      } else {
         stars.push(<img className='Stars' key={i} src={StarInactive} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>; // Returns the stars
}
export default Rating;