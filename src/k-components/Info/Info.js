import React from 'react'
import hosts from "../../assets/Group 3618.svg"
import avatar from "../../assets/Ellipse 7.svg"
import avata from "../../assets/Ellipse 7 (1).svg"
import { Link } from 'react-router-dom';
import arrow from "../../assets/arrow.svg"


import './Info.css';

const Info = () => {
  return (
    <>
    <div id="cultural" className='max'>
    <div className='info'>
      <div className='info__one'>
        <div className='info__one-msg'>
              <h4>POA Cultural Spaces</h4>
              <p>Proof of Africa cultural spaces is a monthly collaborative event held on twitter to foster
                  awareness of African cultural heritage and encourage the exchange of culture between people and 
                  communities on the blockchain, 
                  starting with gifted cross-chain artists.
                  <br /> <br />
              We intend to collect and preserve pieces of traditions foreign 
              to us on the canvas of our hearts, hence the need to strengthen unity and 
              strategic collaborations with profound NFT Artists cross-chain. 
              A unique onboarding space and an equally great opportunity to Meet, Collab, 
              and make new connections with truly talented artists!</p>

              <Link
            to="form"
            smooth={true}
            duration={500}
              >
              <button>I’m an artist</button>
              </Link>
          </div>

          <div className='info__one-hosts'>
              <img src={hosts} alt=""/>
          </div>
      </div>

      <div className='info__two'>
          <h3>Meet Your Co-Hosts</h3>

          <div className='ok'>
          <div className="info__two-main">
              <div className='check'>
                  <img src={avatar} alt=""/>
                  <p>Tai Mei</p>
              </div>

              <p className="pp">An accomplished Taiwanese artist and photographer whose bespoke photography project 
                ‘La Tei Mei La Resistance’
                 captures her own experiences and emotions as a woman, artist and Taiwanese.
              </p>

              <button><a className="btn-sm" href="https://twitter.com/taimei_886">
              Connect on twitter

                <img src={arrow} alt=""/>
              </a>
                
              </button>
          </div>

          <div className="info__two-main">
              <div className='check'>
                  <img src={avata} alt=""/>
                  <p>Nkesi</p>
              </div>
              <p className="pp">A community builder at heart and a speaker with a passion for onboarding
               people into the web3 space; <a className="zoe" href="https://twitter.com/zoepool">Zoepool Co-host</a>, Nkesi is excited about bringing people who 
              share an enthusiasm for Culture and Arts together in this space.</p>

              <button><a className="btn-sm" href="https://twitter.com/Nkesi_x">
              Connect on twitter

                <img src={arrow} alt=""/>
              </a>
                
              </button>
          </div>
          </div>
      </div>
      </div>
    </div>

<div className='form'>
<div className='max'>
  <div className='form__header'>
      <h4>New to spaces?</h4>
      <p>Space tip - Introduce yourself culturally, then share, collab and connect</p>

      <button className="form__header_button"><Link to="/coming-soon">Go to events</Link></button>
  </div>
  </div>
</div>
</>
  )
}
export default Info;


