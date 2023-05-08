import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import group from "../../assets/Group 3624.svg"
import { Link } from 'react-scroll';

import "./tribe.css"



const Tribe = () => {

  const settings = {
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='tribe'>
      <Slider {...settings}>
        <div className='tribe__main-one check-one'>
          <div className='maxx'>
            <div className="main">
                  <h4>The Tribal series</h4>
                  <p>Take a trip to the past</p>

                  <Link
                      to="tribal-series"
                      smooth={true}
                      duration={500}
                    >
                      <button> Connect with us</button>
                  </Link>
              </div>
            
              <div className='img'>
                  <img src={group} alt=""/>
              </div>
          </div>
           
        </div>

        <div className='tribe__main-one check-two'>
          <div className='maxx'>
              <div className="main">
                    <h4 className='h4'>Cultural Spaces</h4>
                    <p>An opportunity to uncover talented web3 artists cross chain</p>
                   
                    {<Link
                      to="features-section"
                      smooth={true}
                      duration={500}
                    >
                      <button> Connect with us</button>
                    </Link> }
                    
                </div>
          </div>
        </div>
        </Slider>
    </div>
  )
}

export default Tribe