import React from 'react';
import './steps.css';
import wallet from '../../assets/wallet.svg';
import sda from '../../assets/sda.svg';
import rewards from '../../assets/rewards.svg';
import cross from '../../assets/line-1.svg';
import criss from '../../assets/line-2.svg';


const Steps = () => {
  return (
    <div className="poa__steps-container">
      <div className="poa__steps-header">
        <h1 className="font-face-cm">Steps To Delegate Your Stake</h1>
      </div>

      <div className="poa-steps__container">
        <div className="poa-steps__sub">
          <img src={wallet} alt="wallet"/>
          <div>
            <h1>Choose wallet</h1>
            <p>Ensure that you hold your ADA on a Cardano compatible wallet such as Yoroi wallet, AdaLite or Daedalus wallet. Choose your preferred way to access your Cardano wallet.</p>
          </div>
        </div>

        <img className="cross" src={cross} alt="line-1" />

        <div className="poa-steps__sub sda">
          <img src={sda} alt="sda"/>
          <div>
            <h1>Stake your $ADA</h1>
            <p>Follow Instructions to connect your wallet. Copy our Pool ID below or Find our ticker “POA” and choose the amount of ADA you want to Delegate. The required minimum is only 5.5 ADA!</p>
          </div>
        </div>

        <img className="criss" src={criss} alt="line-2"/>

        <div className="poa-steps__sub reward">
          <img src={rewards} alt="rewards"/>
          <div>
            <h1>Earn rewards</h1>
            <p>You may now go to the “Dashboard” tab to track your rewards. Please wait 15-20 days for your first rewards to show up.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps