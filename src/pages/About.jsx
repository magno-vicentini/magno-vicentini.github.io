import React, { useContext } from 'react';
import imageMagno from '../assets/images/image-perfil-2.png'
import Hobbies from '../components/Hobbies';
import myInfos from '../assets/images/infosMagno';

import '../styles/About.scss'
import PortfolioContext from '../context/PortfolioContext';

export default function About() {
  const { darkMode } = useContext(PortfolioContext)

  return (
  <div className={`about-page ${(!darkMode) ? 'ligth-mode-green' : ''}`} id="about">
    <h1>About</h1>
    <div className='all-image-about'>
      <img src={imageMagno} alt="magno perfil" className='image-perfil-2 '/>
      <p>Let's tap to know more about me.</p>
      <div className='hobbies'>
        { 
          myInfos.map((info) => {
            return (
              <Hobbies key={info.hobbie} imageInfo={ info.hobbie } descInfo={ info.desc }/>
            )
        })
        }
      </div>
    </div>
  </div>
  );
}
