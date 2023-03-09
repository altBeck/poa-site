import React from 'react';
import './team.css';
import josh from '../../assets/josh.png';
import gwendal from '../../assets/gwendal.png';
import davide from '../../assets/davide.png';
import linkedin from '../../assets/linkedin.svg';



const Team = () => {
  return (
    <div className="poa__team-container">
      <div className="poa__team--header">
        <h1 className="font-face-cm">Meet The Team</h1>
      </div>

      <div className="poa__team--sub-container">
        <div className="poa__team-members">
          <img src={josh} alt="Joshua the Founder"/>
          <h1>Joshua Akpan</h1>
          <p>Founder</p>
          <a href="https://www.linkedin.com/in/joshuaakpan/">Connect <img src={linkedin} alt="linkedin icon"/></a>
        </div>
        <div className="poa__team-members">
          <img src={gwendal} alt="Gwendal the Community Manager"/>
          <h1>Gwendal Le Divechen</h1>
          <p>Community Manager/ Francophone relations</p>
          <a href="https://www.linkedin.com/in/gwendal-le-divechen-18577b50/">Connect <img src={linkedin} alt="linkedin icon"/></a>
        </div>
        <div className="poa__team-members">
          <img src={davide} alt="Davide the Creative Director"/>
          <h1>Davide Pasini</h1>
          <p>Creative Director</p>
          <a href="https://www.linkedin.com/in/davidepasini/">Connect <img src={linkedin} alt="linkedin icon"/></a>
        </div>
      </div>
    </div>
  )
}

export default Team