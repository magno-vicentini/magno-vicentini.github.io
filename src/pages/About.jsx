import React from 'react';
import imageMagno from '../assets/images/image-perfil-2.png'
import Hobbies from '../components/Hobbies';
import myInfos from '../assets/images/infosMagno';


import '../styles/About.scss'

export default function About() {

  return (
  <div className='about-page' id="about">
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
