import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           
            SANELE <MdFingerprint className='navbar-icon' />
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
             {click ? <FaTimes/> : <FaBars/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hire-sound'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                HIRE A SOUND 
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/equipment'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SOUND EQUIPMENT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CONTACT US'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;