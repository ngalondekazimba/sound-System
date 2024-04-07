import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
  return (
   <>
  <div className="navbar">
     <div className="navbar-container">
     <Link to ="/" className="navbar-logo">
        SANELE 
      <MdFingerprint className='navbar-icon' />
     
    </Link>
      <div className='menu-icon' onClick={handleClick} >
      { click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-manu'}>

        <li className='nav-item'>

            <Link to ="/" className='nav-links' onClick={closeMobileMenu}>
                HOME
            </Link>
        </li>
      <li className='nav-item'>  
     <Link to ="hire-sound" className='nav-links' onClick={closeMobileMenu}> 
     HIRE A SOUND SYSTEM
     </Link>

     </li>
     <li className='nav-item'>
<Link to ="equipment" className='nav-links' onClick={closeMobileMenu}>
    SOUND EQUIPMENT
</Link>
</li>
<li className='nav-item'>
<Link to ="about" className='nav-links' onClick={closeMobileMenu}>
    ABOUT US
</Link>
</li>
<li className='nav-item'>
<Link to ="contact" className='nav-links' onClick={closeMobileMenu}>
    CONTACT US
</Link>
</li>


      </ul>
  </div>
  </div>
  </>

  );
}

export default Navbar;
