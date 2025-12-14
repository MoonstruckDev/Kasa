// IMPORTS
import './about.scss'

// COMPONENTS
import Collapse from '../../components/Collapse/Collapse'

// ASSETS
import Banner from '../../assets/banner-about.png'
import data from '../../assets/collapse.json'


// About page
function About() {
   return (
      <section>
         <img className='BannerCont' alt='Paysage' src={Banner} />
         <Collapse data={data}/>
      </section>
   )
 }
 
 export default About