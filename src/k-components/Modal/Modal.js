import React from 'react'
import thankyou from "../../assets/unsplash_3TLl_97HNJo.svg"
import close from "../../assets/close.svg"
import "./modal.css"

const Modal = ({showModal}) => {
  return (
    <div className='modal'>
        <img className='close' onClick={showModal} src={close} alt=""/>
        <img src={thankyou}  alt=""/>
        <h3>Thank you!</h3>
        <p>Your submission has been received</p>
    </div>
  )
}

export default Modal;