import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const data = [
    {
       image: 'https://i.imgur.com/IGIEO39.jpeg', 
       
      },
      {
        image:'https://i.imgur.com/9gW0YR6.jpeg', 
        
      },
      {
        image:'https://i.imgur.com/ANiCRai.jpeg', 
        
      } 
    ]






export default function Barbershop() {

    return (
        <>
        <div className="barberContainer">
            <div className="barberText">
            <Carousel fade controls={false} indicators={false}>
             {data.map((slide, i) => {
              return (
                <Carousel.Item>
              <img
                className="d-block h-20"
                src={slide.image}
                alt="slider image"
                />
              
            </Carousel.Item>
              )
            })}
            
          </Carousel>
        </div>
            <div className="menu">
                <ul>
                    <li>Any type of Fade(Tuesday-Saturday)</li><aside>$30</aside>
                    <li>Lining/Edge Up</li><aside>$30</aside>
                    <li>Kids Haircuts (5 and under)</li><aside>$30</aside>
                    <li>Kids Haircuts (6 through 14)</li><aside>$30</aside>
                    <li>Beard Trim with Lining/Edge Up</li><aside>$30</aside>
                    <li>Hair Shampoo</li><aside>$30</aside>
                    <li>Hair Line Restoration (SMP)</li><aside>$30</aside>
                    
                </ul>
            </div>
        </div>
                <p className="emailLink">Need a cut? <a  href="mailto: angel.l.ppuente@gmail.com">Hit us up </a></p>
        </>
        
    )
}