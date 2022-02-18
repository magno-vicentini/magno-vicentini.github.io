import React, { useContext, useEffect, useState } from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { animateScroll as scroll } from 'react-scroll';
import '../styles/Header.scss';
import { Link } from 'react-scroll';
import DayNight from '../components/DayNight';
import PortfolioContext from '../context/PortfolioContext';

import useMediaQuery from '@mui/material/useMediaQuery';

function Header() {
  const [scrollDir, setScrollDir] = useState(true);
  const { darkMode } = useContext(PortfolioContext);

  const minScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(!(scrollY > lastScrollY));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <header
      className={`nav-portfolio ${(!darkMode) ? 'ligth-mode-header' : ''}`}
      style={{
        animation: scrollDir
          ? 'fadeIn 1s forwards'
          : 'fadeOut 1s forwards',
      }}
    >
      <HomeIcon
        className='nav-types'
        style={{ cursor: 'pointer' }}
        onClick={() =>
          scroll.scrollTo(0, { duration: '0', delay: '0', smooth: 'true' })
        }
      />
      <Link to='toolbox' smooth duration={1000} offset={-30}>
        <h1>Toolbox</h1>
      </Link>
      <Link to='projects' smooth duration={1000} offset={-30}>
        <h1>Projects</h1>
      </Link>
      <Link to='about' smooth duration={1000} offset={-30}>
        <h1>About</h1>
      </Link>
      <Link to='contact' smooth duration={1000} offset={-30}>
        <h1>Contact</h1>
      </Link>
      {
        (minScreen) ? '' : <DayNight/>
      }
    </header>
  );
}

export default Header;
