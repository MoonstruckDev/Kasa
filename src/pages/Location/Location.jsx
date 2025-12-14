// IMPORTS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './location.scss';

// COMPONENTS
import Error from '../../pages/Error/Error';
import Slider from '../../components/Slider/Slider';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse'

// ASSETS
import DataLocation from '../../assets/location.json';



// The page for the houses
function Logement() {
   const [logement, setLogement] = useState(null); 
   const { id } = useParams(); // gets the id of the house in the url

   useEffect(() => {  // Gets the information based on ID
      const data = DataLocation.find(location => location.id === id);
      if (data) {
      setLogement(data);
   } else { 
      setLogement(null);
   }
   }, [id]);

   if (!logement) { // If the ID doesn't exist return error
      return (<Error />);
   }

   // Create a json to pass it to the collapsehome
   const data = [
      {
         title: 'Description',
         text: logement.description
      },
      {
         title: 'Equipements',
         text: logement.equipments.map(equipment => (
            <p className='TextCollapse TextCollapseOpen' key={equipment}>{equipment}</p>
         ))
      }
   ]


   return ( 
      <>
         {logement.pictures && <Slider images={logement.pictures} />}

         <section className='ContInfo'>

            <div className='ContInfoLogement'>
               <h1 className='TitleInfo'>{logement.title}</h1>
               <p className='TextInfo'>{logement.location}</p>
               <ul className='TagUl'>
                  {logement.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='ContInfoOwner'>
               <div className='OwnerContainer'>
                  <p className='TextInfoOwner'>{logement.host.name}</p>
                  <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
               </div>

               <Rating rating={logement.rating} />
            </div>

         </section>

         <Collapse data={data}/>

      </>
  );
}


export default Logement;