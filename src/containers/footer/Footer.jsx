import React from 'react';
import './footer.css';
import yt from '../../assets/poa-logo-yt.svg';
import aw from '../../assets/arrow.svg';
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import twttr from "../../assets/twttr.svg"
import lnkdn from "../../assets/lnkdn.svg"

const Footer = () => {
  return (
    <div className="poa__main-footer">
    <div className="mini-footer">
       
        <div className="poa__mini-footer">
        <div className="poa__footer-section">
            <img src={yt} alt=""/>
            <p>Join our newsletter to stay up to date on features and releases.</p>
            <form>
                <input
                placeholder='yourname@email.com'/>

                <button>Subscribe <img src={aw} alt="arrow"/></button>
            </form>

            <p className='p'>By subscribing you agree to our Privacy Policy and provide consent to 
                receive updates from our company.</p>
        </div>


        <div className="poa--section-links">
            <div className="links">
              <h2>Company</h2>
              <p href="#about">About Us</p>
              <p href="#projects">Projects</p>
              <p href="#discover">Discover Africa</p>
              <p href="/#">Cultural Spaces</p>
            </div>

            <div className="links__social">
                <h2>Follow Us</h2>

                <li>
                    <img src={fb} alt=""/>
                    <span>Facebook</span>
                </li>
                <li>
                    <img src={insta} alt=""/>
                    <span>Instagram</span>
                </li>
                <li>
                    <img src={twttr} alt=""/>
                    <span>Twitter</span>
                </li>
                <li>
                    <img src={lnkdn} alt=""/>
                    <span>LinkedIn</span>
                </li>
            </div>
        </div>

        </div>

        <hr />
        
        <div className="footer__three">
            <p>2023 Proof of Africa. All right reserved.</p>

            <div className="footer__three-one">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer