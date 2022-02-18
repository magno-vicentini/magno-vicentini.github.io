import React from 'react'
import '../styles/Toolbox.scss'
import frontendIcons from '../assets/images/frontend-images'
import backendIcons from '../assets/images/backend-images'
import generalToolsIcons from '../assets/images/generalToolbox-images'

function Toolbox() {
  
  return (
    <div className='toolbox-page' id="toolbox">
      <h1 data-aos="zoom-in">Toolbox</h1>
      <p data-aos="zoom-in">Lets take a look in the skills, tools and technologies I use in my projects.</p>
      
      <h3 data-aos="zoom-in">Front-End</h3>
      <div className='toolbox-front'>
        {
          frontendIcons.map((el, index) => {
            return (
              <div key={`front${index}`} className='icon-container' data-aos="fade-up">
                <img src={el.url} alt={el.iconName} className="image-front"/>
                <p>{el.iconName}</p>  
              </div>
            )
          })
        }
      </div>
      <h3 data-aos="zoom-in">Back-End</h3>
      <div className='toolbox-front'>
        {
          backendIcons.map((el, index) => {
            return (
              <div key={`back${index}`} className='icon-container' data-aos="fade-up">
                <img src={el.url} alt={el.iconName} className="image-front"/>
                <p>{el.iconName}</p>  
              </div>
            )
          })
        }
      </div>
      <h3 data-aos="zoom-in">General</h3>
      <div className='toolbox-front'>
        {
          generalToolsIcons.map((el, index) => {
            return (
              <div key={`general${index}`} className='icon-container' data-aos="fade-up">
                <img src={el.url} alt={el.iconName} className="image-front"/>
                <p>{el.iconName}</p>  
              </div>
            )
          })
        }
      </div>
      
    </div>

  )
}

export default Toolbox;
