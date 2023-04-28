import React from 'react'
import proof from "../../assets/Proof of Africa negative w-tagline 2.svg"
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import twttr from "../../assets/twttr.svg"
import lnkdn from "../../assets/lnkdn.svg"
import { Link } from 'react-router-dom';

import './footer.css'

const Footer = () => {
  return (
    <div className='maxxx'>
    <div className='footer'>
       
        <div className="foot">
        <div className='footer__one'>
            <img src={proof} alt=""/>
            <p>Join our newsletter to stay up to date on features and releases.</p>
            <form>
                <input
                placeholder='yourname@email.com'/>

                <button>Subscribe</button>
            </form>

            <p className='p'>By subscribing you agree to our Privacy Policy and provide consent to 
                receive updates from our company.</p>
        </div>


        <div className='footer__two'>
            <div className='footer__two-one'>
                <p>Company</p>
                <li><a href="https://poapool.com/#about">About Us</a></li>
                <li><a href="https://poapool.com/#projects">Projects</a></li>
                <li><Link to="/discover">Discover Africa</Link></li>

            </div>

            <div className='footer__two-two'>
                <p>Follow Us</p>

                <li><a className="link-sm" href="https://twitter.com/poapool"><img src={twttr} alt=""/>
                    <span>Twitter</span></a>
                    
                </li>
                <li><a className="link-sm" href="https://www.linkedin.com/company/proofofafrica/"><img src={lnkdn} alt=""/>
                    <span>LinkedIn</span></a>
                    
                </li>
            </div>
        </div>

        </div>

        <hr />
        
        <div className='footer__three'>
            <p>2023 Proof of Africa. All right reserved.</p>

            <div className='footer__three-one'>
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