import React,{useState, useEffect} from 'react'
import btn from "../../assets/a.svg"
import { Link } from 'react-scroll';
import "./hero.css"


const Hero = () => {
  const [main, setMain] = useState([])
  const [secondMain, setSecondMain] = useState([])
  const [info, setInfo] = useState([])


  // useEffect(() => {
  //   const getAllEntries = async () => {
  //     try {
  //       await client.getEntry('2aTrIEfkdEieXPHWDAnvmx').then((entry) => {
  //         setMain(entry.fields.heroMain)
  //         setInfo(entry.fields.heroInfo)
  //         setSecondMain(entry.fields.heroSpanMain)

  //         console.log(entry.fields.heroMain)
  //       })
  //     } catch (error) {
  //       console.log(`Error fetching authors ${error}`);
  //     }
  //   };
  //   getAllEntries()
  // }, [])

 
  return (
    <>
    <div className="hero">
      <div className='max'>
        <div className='hero__msg'>
          <h4>Discover <span> Africa </span></h4>
          <p>How do we preserve pieces of traditions foreign to us?</p>
        </div>

        <Link
        to="features-section"
        smooth={true}
        duration={500}
      >
        <button className='hero__btn'>
          <img src={btn} alt=""/>
       </button>
       </Link>
      </div>
    </div>
    </>
  )
}

export default Hero