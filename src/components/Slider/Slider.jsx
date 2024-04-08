// IMPORTS
import { useState } from 'react'
import './slider.scss'

// ASSETS
import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';


// Shows the images in the slider
function Slider({ images }) { 
   const [currentIndex, setCurrentIndex] = useState(0);

   function nextImage() {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
   };

   function prevImage() { 
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
   };


   return (
      <section className='ContSlider'>
         
         {images.length > 1  // If only 1 image show only the one image
         &&
         <> 
            {/* // Shows image counter*/}
            <p className='CountSlider'>{currentIndex + 1} / {images.length}</p> 
            
            {/* // Functionality for arrows */}
            <img className='ArrowSliderLeft' src={ArrowLeft} alt="Flèche gauche" onClick={nextImage} />
            <img className='ArrowSliderRight' src={ArrowRight} alt="Flèche droite" onClick={prevImage} /> 
         </>
         }
         
         {/* // shows image based on current index */}
         <img className='ImgSlider' src={images[currentIndex]} alt="Logement" /> 


      </section>
   )
}

export default Slider;
