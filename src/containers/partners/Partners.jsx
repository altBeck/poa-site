import React from 'react';
import './partners.css';
import catalyst from '../../assets/catalyst.svg';
import dapp360 from '../../assets/dapp360.svg';
import empowa from '../../assets/empowa.svg';
import emurgo from '../../assets/emurgo.svg';
import afro from '../../assets/afrofinlab.svg';
import gimba from '../../assets/gimbalabs.svg';
import poa from '../../assets/poa.svg';
import wada from '../../assets/wada.svg';
import imani from '../../assets/imani.svg';
import abcd from '../../assets/abcd.svg';
import encode from '../../assets/encode.svg';


const Partners = () => {
  return (
    <div className="poa__partners-container">
      <div className="poa__partners-sub_container">

        <h1 className="font-face-cm poa_partners-heading">TRUSTED BY OUR PARTNERS</h1>
        <div className="poa_partners-one">
          <img src={catalyst} alt="catalyst"/>
          <img src={dapp360} alt="dapp360"/>
          <img src={empowa} alt="empowa"/>
          <img src={emurgo} alt="emurgo"/>
          <img src={afro} alt="afrofinlab"/>
          <img src={gimba} alt="gimbalabs"/>
        </div>
        <div className="poa_partners-two">
        <img src={poa} alt="poa"/>
        <img src={wada} alt="wada"/>
        <img src={imani} alt="imani"/>
        <img src={abcd} alt="abcd"/>
        <img src={encode} alt="encode"/>
        </div>
      </div>
    </div>
  )
}

export default Partners