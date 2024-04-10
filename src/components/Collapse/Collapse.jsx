// IMPORTS
import { useState } from 'react'
import './Collapse.scss'

// ASSETS
import Arrow from '../../assets/arrow.png'

function Collapse({ data }) {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggleCollapse = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index)
      } else {
        return [...prevOpenIndexes, index]
      }
    })
  }

  const numCollapses = data.length
  const containerClass = numCollapses === 2 ? 'CollapseHomeTwo' : 'CollapseHome'

  return (
    <div className={containerClass}>
      {data.map((collapse, index) => (
        <div className="ContCollapse" key={index}>
          <div className="TitleCont" onClick={() => toggleCollapse(index)}>
            <h3 className='TitleCollapse'>{collapse.title}</h3>
            <img
              src={Arrow}
              alt="Arrow"
              style={{ transform: openIndexes.includes(index) ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 0.3s ease' }}
              className="Arrow"
            />
          </div>
          
          <div className={`TextCollapse ${openIndexes.includes(index) ? 'TextCollapseOpen' : ''}`}>
            {collapse.text}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Collapse
