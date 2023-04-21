import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/poa-logo.svg';
import down from '../../assets/down.svg';

import './navbar.css';

const Menu = () => (
  <><p><a href="#about">About Us</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#discover">Discover Africa</a></p>
  <button type="button" className="poa__navbar-links_stake"><a href="#stake">Start Staking</a></button></>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState (false);

  return (
    <div className="poa__navbar">
      <div className="poa__navbar-links">
        <div className="poa__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="poa__navbar-links_container">
          <Menu />
        </div>

      </div>

      <div className="poa__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="poa__navbar-menu_container scale-up-center">
            <div className="poa__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}

      </div>
    </div>

  )
}

export default Navbar