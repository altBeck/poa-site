import React, { useState } from 'react';
import './footer.css';
import yt from '../../assets/poa-logo-yt.svg';


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
              <input type="email" id="email" value={email} onChange={handleChange} required />
              <button type="submit">Subscribe</button>
            </form>

          </div>

          <div className="poa-section-links">
            <div className="section">
              <h2>Company</h2>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#discover">Discover Africa</a></li>
                <li><a href="/#">Cultural Spaces</a></li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Footer