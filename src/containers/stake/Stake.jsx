import React, { useState } from 'react';
import './stake.css';
import map from '../../assets/map.svg';
import mapp from '../../assets/map-mobile.svg';


function Stake() {

  const [billAmount, setBillAmount] = useState(0);
  const tipRate = 0.0313; // 3.13%
  
  const tipAmount = billAmount * tipRate;
  const totalAmount = billAmount + tipAmount;
  
  function handleBillAmountChange(event) {
    const value = event.target.value;
    setBillAmount(value);
  }


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
          <hr className="hr" width="auto" size="1" />
          <div className="poa_form-two">
            <div>
              <label htmlFor="billAmount">Ada amount:</label>            
              <input
                type="number"
                id="billAmount"
                value={billAmount}
                onChange={handleBillAmountChange}
              />
            </div>
            <div>
              <span>Delegation Rewards</span>
              <p> ₳{tipAmount.toFixed(2)}</p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  )
}

export default Stake