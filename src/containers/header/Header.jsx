import React from 'react';
import './header.css';
import hero from '../../assets/hero_prime.svg';

const Header = () => {
  return (
    <div className="poa__header">
      <div className="poa__header-container">
        <div className="poa__header-container_text">
          <h1 className="font-face-cm">Are you interested in staking?</h1>
          <h3>Earn $ADA rewards while discovering Africa</h3>
          <button type="button" className="poa__header-btn">Get started</button>
        </div>

        <div className="poa__header_hero-img">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default Header