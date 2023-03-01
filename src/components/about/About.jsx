import React from 'react';
import './about.css';
import member from '../../assets/member.svg';
import project from '../../assets/project.svg';
import capital from '../../assets/capital.svg';

const About = () => {
  return (
    <div id="about" className="poa__about-container">
      <div className="poa__about-sub_container">
        <div className="poa__about-heading">
          <h1 className="font-face-cm">About Us</h1>
          <h3 className="font-face-cm">The Leading Stake Pool Operation In <span>Africa</span></h3>
          <p>Since 2019, our goal has been to completely re-think Africa through a blockchain perspective</p>
        </div>

        <div className="poa__about-stats_container">
          <div className="poa__stats one">
            <div>
              <h2>Community Members</h2>
              <h3>4200+</h3>
            </div>
            <img className="poa__stats-img" src={member} alt="member" />
          </div>

          <div className="poa__stats two">
            <div>
              <h2>Supported Projects</h2>
              <h3>15</h3>
            </div>
            <img className="poa__stats-img" src={project} alt="project" />
          </div>

          <div className="poa__stats">
            <div>
              <h2>Staked Capital</h2>
              <h3>3.75M₳</h3>
            </div>
            <img className="poa__stats-img" src={capital} alt="capital" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About