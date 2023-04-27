import React from 'react'
import Header from "../k-components/Header/Header"
import Hero from '../k-components/Hero/Hero'
import Info from '../k-components/Info/Info'
import Tribe from '../k-components/Tribe/Tribe'
import Carousel from '../k-components/Carousel/index'
import Form from '../k-components/form/Form'
import { Element } from 'react-scroll';
import Footer from '../k-components/Footer/Footer'


import "./discover.css"

const Discover = () => {
  return (
    <div className="App">
    <Header />
    <Hero />
    <Element name="tribe">
      <Tribe />
    </Element>

    <Element name="tribal-series">
      <Carousel />
    </Element>

    
   
      <Element name="features-section">
        <Info />
      </Element>

      <Element name="form">
        <Form />
      </Element>
    
    <Footer />
    </div>
  )
}

export default Discover