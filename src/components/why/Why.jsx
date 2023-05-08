import React from 'react';
import './why.css';

import rocket from '../../assets/rocket-icon.gif';

const Why = () => {
  return (
    <div className="soon-header">
      <img src={rocket} alt="rocket" />

      <div className="soon-semi">
        <h1 className='font-face-cm'>COMING SOON</h1>
      </div>
    </div>
  )
}

export default Why