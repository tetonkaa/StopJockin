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
        const handleSelect = (selectedIndex, i) => {
          setIndex(selectedIndex);
        };
      
        return (
              <div className="homeContainer">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
             {data.map((slide, i) => {
              return (
                <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
                />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
              )
            })}
            
          </Carousel>
                <div>       
            <p className="homeText"> 
            <h1 className="largeLogo">Stop Jockin</h1> 
            Fine Cuts classic New Orleans style snoBalls, and other Stop Jockin services and products. </p>
            </div>
          </div>
        );
      }
 
    




  {/* <div className="homeContainer  ">
    </div>  */}