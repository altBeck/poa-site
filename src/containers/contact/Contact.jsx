import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
  };

  const zero= {
    margin: '0'
  };

  return (
    <div className="contact">

      <div className="poa__contact-container">
        <div className="poa__contact-intro">
          <h1 className="font-face-cm">Contact <span>Us</span></h1>
          <p>We’re here to help! Fill in your details, and we’ll reach out shortly.</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="poa__form">
            <div className="formie">

              <label className="form-label">
                <span>Name</span>
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <br />
              <label className="form-label">
                <span>Email</span>
                <input type="email" value={email} onChange={handleEmailChange} style={zero} />
              </label>
              <br />
            </div>
          </div>

          <div className="poa__form out">
            <label className="form-label">
              <span>Type</span>
              <select value={type} onChange={handleTypeChange}>
                <option value="Staking">Staking</option>
                <option value="Partnerships">Partnerships</option>
                <option value="Culture/NFT Exchange Spaces">Culture/NFT Exchange Spaces</option>
              </select>
            </label>
            <br />
            <label className="form-label in">
              <span>Subject</span>
              <input type="text" value={subject} onChange={handleSubjectChange} style={zero} />
            </label>
            <br />
          </div>
          <div className="form-label-mint">
            <label>
              <span>Message</span>
              <textarea value={message} onChange={handleMessageChange} placeholder="Type your message..." />
            </label>
            <br />
          </div>
          <button className="contact-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
