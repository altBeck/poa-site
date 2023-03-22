import React from 'react';
import './projects.css';
import abcd from '../../assets/abcd-img.png';
import card from '../../assets/cardano-img.png';
import img from '../../assets/poa-card.png';



const Projects = () => {
  return (
    <div className="poa__projects-container">
      <div className="poa__projects_sub-container">

      <div className="poa__projects-header">
        <h1 className="font-face-cm">POA Projects</h1>
      </div>

      <div className="poa__projects__first-container">
        <div className="poa__projects-module slide">
          <h1>African Blockchain Center for Developers</h1>
          <p>Established in 2020, the Academy seeks to educate and train young African developers at an elite level in blockchain technology, enabling them harness the power of blockchain technology to implement decentralized innovations.</p>
          <button className="poa__projects-btn">See summary here</button>
        </div>
        <img src={abcd} alt="abcd"/>
      </div>

      <div className="poa__projects__second-container">
        <div className="poa__projects-module-one">
          <div className="poa__projects-module one">
            <h1>Meetups</h1>
            <p>Did you know that our first physical meet up took place in the city of Port Harcourt? It's worth noting people came from all over Nigeria to participate and learn first hand about Blockchain technology, Cardano stakepools, and how to launch one successfully.</p>
            <button className="poa__projects-btn">See summary here</button>
          </div>
          <img src={card} alt="cardano"/>
        </div>

        <div className="poa__projects-module-two">
          <div className="poa__projects-module one">
            <h1>African projects bootstrap funds</h1>
            <p>Proof Of Africa cares about the African dream and seeks to give a chance to the uprising giants of Africa. A monthly grant of 1000 ADA from profits generated from our on-chain activities was opened in 2020 to all initiatives, projects or business ideas with a solid plan and a competent team.</p>
            <button className="poa__projects-btn grant-btn">POA Grants</button>
          </div>

          <img className="project-card" src={img} alt="grant card"/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects