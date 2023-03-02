import React from 'react';

import { Team, Partners, Footer, Header, Projects, Stake, Steps, Calculator, Faq, Pool } from './containers';
import { About, Navbar, } from './components';
import './App.css';

const App = () => {
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
      <Faq />
      <Footer />
      <Projects />
      <Team />
    </div>
  )
}

export default App