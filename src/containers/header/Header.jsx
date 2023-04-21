import React from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hero from '../../assets/hero_prime.svg';
import coin from '../../assets/coin.svg';
import slide from '../../assets/slide.svg';

import './header.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="poa__header">
      <div>
        <Slider {...settings}>
          
          <div className="poa__header-container">
            <div className="poa__second">
              <div className="poa__header-container_text">
                <h1 className="font-face-cm">Are you interested in staking?</h1>
                <h3>Earn $ADA rewards while discovering Africa</h3>
              </div>
              <button type="button" className="poa__header-btn">Get started</button>
            </div>

            <div className="poa__header_hero-img">
              <img src={hero} alt="hero" />
            </div>
          </div>

          <div className="slider">
            <div className="slider-image">
              <img src={slide} alt="slide hero"/>
            </div>

            <div className="slider-content">
              <h1 className="font-face-cm">Connect with top cross-chain artists</h1>
              <p>Connect with cross-chain artists while learning about indigenous tribes of Africa</p>
              <button type="button" className="poa__header-btn">Get started</button>
            </div>

          </div>

          <div className="coin">
            <div className="coin-content">
              <h1 className="font-face-cm">Proof Of Africa Stake Pool</h1>
              <p>we are a single-pool staking operation committed to advancing decentralization within the cardano blockchain platform</p>
            </div>
            <button type="button" className="poa__header-btn">Get started</button>
            <div className="coin-img">
              <img src={coin} alt="coins"/>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Header