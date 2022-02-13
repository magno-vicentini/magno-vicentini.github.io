import React, { useState } from 'react';
import imageMagno from '../assets/images/image-perfil-2.png'
import Hobbies from '../components/Hobbies';
import myInfos from '../assets/images/infosMagno';


import '../styles/About.scss'

export default function About() {

  return (
  <div className='about-page'>
    <h2>About</h2>
    <div className='all-image-about'>
      <img src={imageMagno} alt="magno perfil" className='image-perfil-2 '/>
      <div className='hobbies'>
        { 
          myInfos.map((info) => {
            return (
              <Hobbies imageInfo={ info.hobbie } descInfo={ info.desc }/>
            )
        })
        }
      </div>
    </div>
  </div>
  );
}
