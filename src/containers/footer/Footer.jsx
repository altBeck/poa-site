import React, { useState } from 'react';
import './footer.css';
import yt from '../../assets/poa-logo-yt.svg';
import aw from '../../assets/arrow.svg';


function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribing ${email} to our newsletter...`);
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="poa__main-footer">
      <div className="poa__footer">
        <div className="poa__mini-footer">
          <div className="poa__footer-section">
            <img src={yt} alt="logo-white"/>
            <h3>Join our newsletter to stay up to date on features and releases.</h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="yourname@email.com" value={email} onChange={handleChange} required />
              <button type="submit">Subscribe<img src={aw} alt="arrow"/></button>
            </form>

          </div>

          <div className="poa--section-links">
            <div className="links">
              <h2>Company</h2>
              <p href="#about">About Us</p>
              <p href="#projects">Projects</p>
              <p href="#discover">Discover Africa</p>
              <p href="/#">Cultural Spaces</p>
            </div>

            <div className="links">
              <h2>Follow Us</h2>
              <p href="#about">About Us</p>
              <p href="#projects">Projects</p>
              <p href="#discover">Discover Africa</p>
              <p href="/#">Cultural Spaces</p>
            </div>
          </div>


        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Footer