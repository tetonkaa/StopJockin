import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import anime from 'animejs/lib/anime.es.js';



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

    
    
    return (
      <div className="homeContainer">
            <Carousel fade controls={false} indicators={false}>
             {data.map((slide, i) => {
              return (
                <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
                />
              
            </Carousel.Item>
              )
            })}
            
          </Carousel>
                <div>       
            <p className="homeText"> 
            <h1 className="largeLogo">Stop Jockin</h1> 
            Fine Cuts,<br/>
            Classic New Orleans style snoBalls, <br/> and other Stop Jockin products and services </p>
            </div>
          </div>
        );
      }
 
    




  {/* <div className="homeContainer  ">
    </div>  */}