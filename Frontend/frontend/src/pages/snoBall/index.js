import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import Carousel from 'react-bootstrap/Carousel'
import { snoballPics } from "../../assets/snoBallphotos/snoballPics";

const data = [
    {
        image: 'https://i.imgur.com/ZlLrcEv.jpg', 
        
       },
       {
         image:'https://i.imgur.com/hS8ZWHR.jpg', 
         
       },
       {
         image:'https://i.imgur.com/uC1WCOe.jpg', 
         
       },
       {
         image:'https://i.imgur.com/qROEQPs.jpg', 
         
       },
       {
         image:'https://i.imgur.com/X0fbIWv.jpg', 
         
       },  
]



export default function SnoBall() {

    return (
        
        <div className="snoballContainer">
            <h1 className="snoBallTitle">Stop Jockin SnoBalls</h1>
            <Carousel fade controls={false} indicators={false}>
             {data.map((slide, i) => {
                 return (
                     <Carousel.Item>
              <img
                className="d-block"
                src={slide.image}
                alt="slider image"
                />
              
            </Carousel.Item>
              )
            })}
            
          </Carousel>
            <p className="snoballText"> THIS WILL BE THE snoBall TEXT/ REMEMBER TO ADD IMAGES AND IMAGE CAROUSEL </p>
        </div>
        
    )
}