import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const data = [
    {
     image: 'https://i.imgur.com/IGIEO39.jpeg', 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:'https://i.imgur.com/9gW0YR6.jpeg', 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:'https://i.imgur.com/ANiCRai.jpeg', 
      caption:"Caption",
      description:"Description Here"
     } 
  ]




export default function Home() {
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
              <div className="homeContainer">
            <Carousel activeIndex={index} onSelect={handleSelect}>
             {data.map((slide, i) => {
              return (
                <Carousel.Item>
                    <div>       
              <img
                className="d-block w-100 kar1"
                src={slide.image}
                alt="slider image"
              />
            <p className="homeText"> Welcome to Stop Jockin home of fine cuts , classic New Orleans style snoBalls, and other Stop Jockin services and products. </p>
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </div>
            </Carousel.Item>
              )
            })}
            
          </Carousel>
          </div>
        );
      }
 
    




  {/* <div className="homeContainer  ">
    </div>  */}