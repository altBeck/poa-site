import React from 'react';
import './pool.css';
import copy from '../../assets/copy.svg';

const Pool = () => {
  return (
    <div className="poa__pool-container">
      <h1 className="font-face-cm poa__pool-container-head">Our Pool Information</h1>

      <div className="poa__pool-sub__container">
        <div className="poa__pool-counter">
          <div className="poa__counter-unit">
            <h1>POA</h1>
            <h4>Ticker</h4>
          </div>
          <hr className="line-hr" width="1" size="90" />

          <div className="poa__counter-unit">
            <h1>10k₳</h1>
            <h4>Pledge</h4>
          </div>
          <hr className="line-hr" width="1" size="90" />

          <div className="poa__counter-unit">
            <h1>3.75M₳</h1>
            <h4>Active stake</h4>
          </div>
          <hr className="line-hr" width="1" size="90" />

          <div className="poa__counter-unit">
            <h1>303</h1>
            <h4>Delegators</h4>
          </div>
          <hr className="line-hr" width="1" size="90" />

          <div className="poa__counter-unit">
            <h1>3.13%</h1>
            <h4>ROS</h4>
          </div>
          <hr className="line-hr" width="1" size="90" />
          
          <div className="poa__counter-unit">
            <h1>951</h1>
            <h4>Lifetime blocks</h4>
          </div>
        </div>

        <div className="poa__pool-sub_counter">
          <h1>Pool ID <span><img src={copy} alt="copy"/></span></h1>
          <h2 className="poa_pool-text">pool1dqlgn7smehsnj5ztz8almy2036lfhrdjv79nmg9tmje0zzt620h</h2>
        </div>

        <div className="poa__pool-buttons">
          <button>View on Adapools</button>
          <button>View on Pooltool</button>
        </div>
      </div>
    </div>
  )
}

export default Pool