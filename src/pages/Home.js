import React from 'react'
import { About, Navbar } from '../components'
import { Calculator, Contact, Faq, Footer, Header, Partners, Pool, Projects, Stake, Steps, Team } from '../containers'

const Home = () => {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <About />
      </div>
      <Calculator />
      <Partners />
      <Pool />
      <Stake />
      <Steps />
      <Projects />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home