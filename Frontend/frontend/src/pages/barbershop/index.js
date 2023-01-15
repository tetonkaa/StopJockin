import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import anime from 'animejs/lib/anime.es.js';







export default function Barbershop() {

    return (
        
        <div className="barberContainer">
            <div className="barberText"> THIS WILL BE THE BARBERSHOP TEXT/ AREA TO ADD IMAGES AND IMAGE CAROUSEL </div>
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
        
    )
}