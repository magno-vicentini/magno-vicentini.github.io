import React from 'react';
import '../App.css';
import '../styles/Home.scss'
import PerfilImage from '../assets/images/magno-perfil-zoom-sem-fundopng.png'

function Home() {
  return (
    <section className='home-page'>
      <div className='intro-about'>
        <h1 className='home-intro'>Welcome!!</h1>
        <h1 className='home-intro'>I'm Magno Vicentini</h1>
        <p>Full-Stack Software Developer</p>
      </div>
      <div className='home-picture'>
        <img
          src={PerfilImage}
          alt='magno-perfil'
          className='image-perfil'
        />
        <div className='image-fader'>
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt='git' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='java-script' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='react' />
          <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='node-js' />
        </div>
      </div>
    </section>
  );
}

export default Home;
