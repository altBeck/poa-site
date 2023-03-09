import React, { useState } from 'react';
import './Faq.css';
import open from '../../assets/icon-open.svg';

function AccordionItem(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-item-header" onClick={toggleCollapse}>
        <h2>{props.question}</h2>
        <img
          src={open}
          alt="arrow icon"
          className={isCollapsed ? "" : "rotate"}
        />
      </div>
      {!isCollapsed && <div className="accordion-item-body">{props.answer}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <div className="faq-accordion">
      <div className="intro-header">
        <h1 className="font-face-cm">Frequently Asked <span>Questions</span></h1>
        <p>Everything you need to know about the POA Stake Pool. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      </div>
      <AccordionItem
        question="What is Cardano?"
        answer="Cardano (ticker symbol, ADA) is the first decentralized proof of stake (PoS) blockchain platform to be developed through peer-reviewed research and to combine pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies."
      />
      <AccordionItem
        question="What is stake delegation?"
        answer="Stake delegation is a process by which ADA holders can transfer the stake associated with their ADA to a pool, allowing those who do not have the skills or desire to run a node to participate in the network."
      />
      <AccordionItem
        question="What is a Cardano Stakepool?"
        answer="A Cardano stake pool is a node or server on the Cardano network that acts for the benefit of stakeholders. The entity running it must have sufficient resources, technical skills, and time to do so."
      />
      <AccordionItem
        question="What are blocks and how are they made?"
        answer="A block on the Cardano network is a group of transactions that a stake pool creates, verifies, and records on the shared ledger. The first block is created at the beginning of each epoch by randomly picking slot leaders—pools assigned to create blocks. The protocol uses staked ADA as a form of “lottery numbers” to do this. When its slot comes, a selected slot leader collects initiated ADA payments and smart contract executions from other stake pools and compiles them into a block before adding them to the ledger. The process repeats itself after each epoch."
      />
      <AccordionItem
        question="When will I receive my first reward?"
        answer="For each change in delegation, the rewards are reflected after 4 epoch transitions (15-20 days).
        For example, if you staked in epoch X, your first rewards will show up at the start of epoch X+4. 
        After the initial wait time, you can expect to receive rewards at the end of every epoch (5 days)."
      />
      <AccordionItem
        question="What are epochs and how long are they?"
        answer="An epoch is a unit of time as marked by the Cardano protocol, and each of them lasts five days.
Every epoch is divided into 432,000 units known as slots, each slot is 1 second long.
You can find the current status of epochs and slot on third-party sites like Adapool.org or pooltools.io"
      />
    </div>
  );
}

export default FAQ;