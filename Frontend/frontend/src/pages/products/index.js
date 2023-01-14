import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './main.css'
import axios from 'axios'




export default function Products() {

    async function getProductInfo() {
        const { data } = await axios.get('http://localhost:8000/product/')
       console.log( {data})
       

    }
    getProductInfo()

    return (
        
        <div className="productsContainer">
            <p className="productsText"> THIS WILL BE THE products TEXT/ REMEMBER TO ADD IMAGES AND IMAGE CAROUSEL </p>
            <img src="image.img"></img>
        </div>
        
    )
}