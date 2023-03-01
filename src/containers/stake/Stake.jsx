import React from 'react';
import './stake.css';
import map from '../../assets/map.svg';
import mapp from '../../assets/map-mobile.svg';


const Stake = () => {
  return (
    <div className="poa__calculator-container">
      <img className="map" src={map} alt="map" />
      <img className="map-mobile" src={mapp} alt="map-mobile"/>

      <div className="poa__calculator">
        <div className="poa__calculator-one">
          <h1 className="font-face-cm">Staking Calculator</h1>
          <p>The annualized equivalent given by this calculator assume that stake is delegated to POA for a 365-day period, and that stake pool performance is consistent over that timeframe.</p>
        </div>
        <div className="poa__calculator-form">
          <h1 className="poa__form-head">Staking calculator</h1>
          <div className="poa_form-one">
            <h1>Current ROS:</h1>
            <h2>3.13%</h2>
          </div>
            <hr width="455" size="1" />
          <div className="poa_form-two">
            <h1>Ada Amount</h1>
            <h2>3.13%</h2>
          </div>
          <div className="poa_form-three">
            <h1>Delegation Rewards</h1>
            <h2>163,098₳</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stake