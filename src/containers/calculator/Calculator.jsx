import React from 'react';
import './calculator.css';
import clock from '../../assets/clock.svg';
import culture from '../../assets/culture.svg';
import fee from '../../assets/fee.svg';
import security from '../../assets/security.svg';

const Calculator = () => {
  return (
    <div className="poa__why-container">
      <div className="poa__why-container-head">
        <h1 className="font-face-cm">Why Stake With Us?</h1>
      </div>
      <div className="poa__why-container-first">
        <div className="poa__first">
          <img src={fee} alt="fee" />
          <div className="poa__firstWhy">
            <h3>Low fees</h3>
            <p>A 0-5% margin fee with optimum saturation level</p>
          </div>
        </div>

        <div className="vertical" ></div>

        <div className="poa__first second">
          <img src={clock} alt="clock" />
          <div className="poa__firstWhy">
            <h3>Reliable</h3>
            <p>All servers are monitored 24/7 by our stakepool operators</p>
          </div>
        </div>

      </div>

      <div className="line-set">
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="poa__why-container-second">
      <div className="poa__first">
          <img src={security} alt="security" />
          <div className="poa__firstWhy">
            <h3>Secure</h3>
            <p>Our servers are highly secured by using IP limited SSH access and necessary precautions are taken to keep nodes running</p>
          </div>
        </div>

        <div className="vertical"></div>

        <div className="poa__first second">
          <img src={culture} alt="culture" />
          <div className="poa__firstWhy">
            <h3>Discover Africa</h3>
            <p>See “Africa”  from our perspective in our cultural exchange spaces. Participate as a delegator, artist or even a collector</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator