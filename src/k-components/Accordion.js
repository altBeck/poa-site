
import down from "./../assets/Chevron Down.svg"
import "./accordion.css"
import { useState, useRef, useEffect, useReducer } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="accordion" ref={containerRef}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p> 
        {isOpen ? (
            <img src={down} alt=""/>
        ) : (
            <img src={down} alt=""/>
        )}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;

