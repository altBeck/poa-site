import React, { useRef, useState } from 'react'
import { db } from "../../firebase"
import Modal from '../Modal/Modal'

import "./form.css"

const options = [
  {
    value: "3D"
  },
  {
    value: "Animation"
  },
  {
    value: "Architecture"
  },
  {
    value: "Character Design"
  },
  {
    value: "Comics"
  },
  {
    value: "Concept Art"
  },
  {
    value: "Contemporary Art"
  },
  {
    value: "Collage"
  },
  {
    value: "Digital Painting"
  },
  {
    value: "Illustrationt"
  },
  {
    value: "Interactive"
  },
  {
    value: "Motion"
  },
  {
    value: "Painting"
  },
]

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[twitter, setTwitter] = useState('')
  const[what, setWhat] = useState('')
  const[that, setThat] = useState('')
  const[motive, setMotive] = useState('')
  const[nft, setNft] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const scrollableContainerRef = useRef(null);
  const[showModal, setShowModal] = useState(false)

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setIsOpen(false);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

  
    db.collection("info")
   .add({
      email,
      name,
      twitter,
      what,
      that,
      motive,
      nft,
      selectedOption
   }).then(()=>{
       setShowModal(true)
      //  setTimeout(() => {
      //    setShowModal(false)
      //    }, 5000); 
   }).catch((error)=>{
      alert(error.message)
   })

   setEmail("")
   setName('')
   setTwitter('')
   setWhat('')
   setMotive('')
   setNft('')
   setThat('')
   setSelectedOption('')
   setShowModal(false)
}


  const renderedOptions = options.map((option) => (
    <li ref={scrollableContainerRef} className="" key={option.value} onClick={() => handleOptionClick(option.value)}>
      {option.value}
    </li>
  ));

  const closeModal = () =>{
    setShowModal(false)
  }


  return (
    <>
    <div className='formm'>
      <div className='max'>
      {showModal &&  <div><div onClick={()=>setShowModal(false)} className="modal-main"></div>
      <div className='form-modal'>
      <Modal showModal={closeModal} />
      </div> </div>}
      
        <form onSubmit={handleSubmit}>
            <h4>Hello Creator</h4>
            <p>Tell us more abut yourself. 
                Fill the form below to register
                 for the POA cultural spaces</p>

        <div className='main-box'>
        <div className='box'>
            <div className='inpp'>
                <label>Name</label> 
                <input
                        value={name}
                        required
                        onChange={(e)=>setName(e.target.value)}
                    />
            </div>

            <div className='inpp'>
                <label>Email</label> 
                <input
                        value={email}
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                    />
            </div>
        </div>

        <div className='box'>
            <div className='inpp'>
                <label>Twitter</label> 
                <input
                        value={twitter}
                        required
                        onChange={(e)=>setTwitter(e.target.value)}
                    />
            </div>

            <div className='inpp'>
                <label>Collection type</label> 
                <div 
                className="dropdown"
                tabIndex="0"
                onBlur={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}>
                <input
                        type="dropdown"
                        placeholder="Select an option"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        onClick={() => setIsOpen(true)}
                    />
                    {isOpen && (
                      <ul className="dropdown-menu">
                       {renderedOptions}
                    </ul>
                     )}
                </div>
                
            </div>
        </div>

          <div className='inp'>
            <label>What inspires you to create?</label> 
              <textarea
                    value={what}
                    required
                    onChange={(e)=>setWhat(e.target.value)}
                />
          </div>


          <div className='inp'>
            <label>Who are your biggest artistic influences?</label> 
              <textarea
                    value={that}
                    required
                    onChange={(e)=>setThat(e.target.value)}
                />
          </div>


          <div className='inp'>
            <label>What is the motive behind your art?</label> 
              <textarea
                    value={motive}
                    required
                    onChange={(e)=>setMotive(e.target.value)}
                />
          </div>


          <div className='inp'>
            <label>Do you have an NFT collection of your work?</label> 
              <textarea
                    value={nft}
                    required
                    onChange={(e)=>setNft(e.target.value)}
                />
          </div>
          <button type="submit">Submit</button>
        </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default Form