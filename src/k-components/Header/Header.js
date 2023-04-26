import React, { useState } from "react"
import logo from "../../assets/Proof of Africa logo con outline e tagline 2.svg"
import menu from "../../assets/menu-01.svg"
import "./header.css"
import { Link } from 'react-scroll';
import Accordion from "../Accordion"


const Header = () => {
  const [showNav, setShownav] = useState(false)

  return(
    <div className="headerr">
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>

      <div className="header__menu">
          {showNav ? <img src={menu} onClick={()=> setShownav(false)}alt="" /> : <img src={menu} onClick={()=> setShownav(true)} alt="" /> }
      </div>

      <div className="list">
        <ul>
            <li>About us</li>
          
            <li>Project</li>
            
            <Accordion title="Discover Africa">
                <ul className="ul">
              <Link
                to="features-section"
                smooth={true}
                duration={500}
              >
                  <li>Cultural spaces</li>
             </Link>

             <Link
                to="tribe"
                smooth={true}
                duration={500}
              >
                 <li>The tribal series</li>
             </Link>

             <Link
                to="form"
                smooth={true}
                duration={500}
              >
                <li>I’m an artist</li>
             </Link>
                
                  
                  
                </ul>
            </Accordion>
            
            
          </ul>
          <button>Start staking</button>
      </div>

     
    </div>

    <div className={showNav ? "active": "notactive"}>
        <ul>
          <li>About us</li>
          <hr />
          <li>Project</li>
          <hr />
          <Accordion title="Discover Africa">
              <ul>
                <li>Cultural spaces</li>
                <li>The tribal series</li>
                <li>I’m an artist</li>
              </ul>
          </Accordion>
          <hr />
          <button>Start staking</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;