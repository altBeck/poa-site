import React, { useState } from 'react'

import avatar from "../../assets/Frame 3599 (2).svg"
import avatar2 from "../../assets/Frame 3599.svg"
import avatar3 from "../../assets/Frame 3599 (1).svg"
import arrow from "../../assets/arrow.svg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.scss"

const datas =[
    {
      first : {
            title:"Part 1: A Look into History",
            description: "The Kikuyu also known as the 'Gikuyu' people ar the first Bantu ethnic group native to Central Kenya, who undertook the anti-colonial agitation in the 1920s. They believe in...",
            link: "https://twitter.com/poapool/status/1584908056709808130?t=3EupSz5Z0yY_YeZQvWGbIg&s=19"
        },
      second:   {
            title:"Part 2: Way of Life",
            description: "The Mugumo (Fig tree) is a sacred tree among the Kikuyu people and is key to understanding the cosmology of the..",
            link: "https://twitter.com/poapool/status/1585648516948336642?t=ByGxt3ZA1VZD0PkwQac6yw&s=19"
        },
      third:  {
            title:"Part 3: Music",
            description: "The Kikuyu were originally agriculturalists, however, after their harvests, they participated in choral dances coupled with...",
            link: "https://twitter.com/poapool/status/1587477215712886792?t=lxitcCaFdSgTNRr9Ho5iPA&s=19"
        },
    },
    {
        first : {
              title:"Part 1: A Look into History",
              description: "The Maasai also known as the 'maa' people were a monotheistic dominating tribe at the beginning of 20th century. They are one of the very few...",
              link: "https://twitter.com/poapool/status/1580575607465078784?t=hzWW-YW9lrFiK9qoJoCfrQ&s=19"
          },
        second:   {
              title:"Part 2: Way of Life",
              description: "Through a Child's eyes…",
              link: "https://twitter.com/poapool/status/1582386546954551296?t=nz-5guEudbsEeQbu0kOeXg&s=19"
          },
        third:  {
              title:"Part 3: Music",
              description: "The Maa people don't use instruments when singing or dancing. All of their music is vocal and comprises rhythms rendered by...",
              link: "https://twitter.com/poapool/status/1583096359141355520?t=pvKtoYGhzT0P1WQIGUrDKg&s=19"
          },
      },

      {
        first : {
              title:"Part 1: A Look into History",
              description: "The Igbo people (Ndi Igbo) are an ethnic group known for their metalworking art that flourished as early as the ninth century. Theocratic in nature, spirituality played a…",
              link: "https://twitter.com/poapool/status/1590745977220370432?s=20&t=hEpB5dSObxX1pc6wQuKTgQ"
          },
        second:   {
              title:"Part 2: Way of Life",
              description: "The oldest Igbo state known as the Kingdom of Nri dates back to 900 AD, and had the most popular political and religious influence over…",
              link: "https://twitter.com/poapool/status/1592548605474537472?s=20&t=2RCPEoYLXhdshtR28Sx_5Q"
          },
        third:  {
              title:"Part 3: Music",
              description: "Traditional music and dance are indispensable parts of the Igbo culture. They serve as a mark of identity and a unifying factor that binds the people together. Ogene is a style of Igbo music that…",
              link: "https://twitter.com/poapool/status/1593277602789314561?s=20&t=2RCPEoYLXhdshtR28Sx_5Q"
          },
      }
 
]



const Sliderr = () => {

    const[currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () =>{
        if(currentIndex === datas.length -1){
            return setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    }
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
      };

  return (
    <div className='main-slider'>
    <div className='slider'>

        <div className='slider__menu mobile'>
        <Slider {...settings}>
            <div className='slider__menu-one'  onClick={()=>  setCurrentIndex(0)}>
                <div className={currentIndex === 0 ? "chk": 'style'}>
                    <img src={avatar} alt=""/>
                    <p>The Kikuyu Tribe</p>
                </div>
            </div>
            <div  onClick={()=>  setCurrentIndex(1)}className='slider__menu-one'>
                <div className={currentIndex === 1 ? "chk": 'style'}>
                    <img src={avatar2} alt=""/>
                    <p>The Maasai Tribe</p>
                </div>
            </div>
            <div  onClick={()=>  setCurrentIndex(2)} className='slider__menu-one'>
                <div className={currentIndex === 2 ? "chk": 'style'}>
                    <img src={avatar3} alt=""/>
                    <p>The Igbo Tribe</p>
                </div>
            </div>
        </Slider>
        </div>
                <div className="carousel-container">
                {datas.map((data)=>{
                    return  <div 
                    style={{transform: `translate(-${currentIndex * 100}%)`}} className='slider__main carousel-item'>
                        <div className='mmain'>
                            <div className='slider__main-one'>
                            <h5>{data.first.title}</h5>
                            <p>{data.first.description}</p>
                            <a href={data.first.link}>
                            <button className='bt'>
                                    <p>Read more</p>
                                    <img src={arrow} alt=""/>
                            </button>
                            </a>
                        </div>
                        <div className='slider__main-one'>
                            <h5>{data.second.title}</h5>
                            <p>{data.second.description}</p>

                            <a href={data.second.link}>
                            <button className='bt'>
                                    <p>Read more</p>
                                    <img src={arrow} alt=""/>
                            </button>
                            </a>
                        </div>
                        <div className='slider__main-one'>
                            <h5>{data.third.title}</h5>
                            <p>{data.third.description}</p>
                            <a href={data.third.link}>
                            <button className='bt'>
                                    <p>Read more</p>
                                    <img src={arrow} alt=""/>
                            </button>
                            </a>
                        </div>
                        </div>
                </div>
        })}
                </div>
        </div>   
    </div>
  )
}

export default Sliderr