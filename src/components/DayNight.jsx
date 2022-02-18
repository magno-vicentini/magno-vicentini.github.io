import React, { useContext } from 'react'
import lampDay from '../assets/images/lamp-turn-in.png'
import lamNight from '../assets/images/lamp-turn-off.png'
import '../styles/DayNight.scss'
import PortfolioContext from '../context/PortfolioContext';

export default function DayNight() {
  const { darkMode, setDarkMode } = useContext(PortfolioContext);

  return (
    
  <div class="lamp-card">
    {
      (darkMode) ? (
        <img src={lamNight} alt="lamp turn off" className='lamp-image' onClick={() => setDarkMode(false)}/>
      ) : (
        <img src={lampDay} alt="lamp turn in" className='lamp-image' onClick={() => setDarkMode(true)} />
      )
    }
  </div>

  )
}
