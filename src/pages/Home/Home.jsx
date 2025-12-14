// IMPORTS
import './home.scss'

// ASSETS
import Banner from '../../assets/banner-home.png'
// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'



// Home page
function Home() {
   return (
      <section>
         
         <div className='BannerCont'>
            <img className='BannerImg' src={Banner} alt='Paysage' />
         </div>
         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home