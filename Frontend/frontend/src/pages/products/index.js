import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './main.css'
import axios from 'axios'




export default function Products() {
    const [products, setProducts] = useState([])

    async function getProductInfo() {
        const { data } = await axios.get('http://localhost:8000/product/all')
        return data
        
        
    }

    useEffect(() => {
    getProductInfo().then(data => setProducts(data))
    }, [])
    
    
    
    
    
    return (
        
        <div className="productsContainer" >
            <h1>Products</h1>
            {products.map((product, i) => {
            return (<div  >
                <div className="eachProduct">
            <img className="productPhoto" src={product.image}></img>
            <p className="productText">{product.name}</p>
            <p className="productText">{product.description}</p>
            <p className="productText">{product.price}</p>
            </div>
            </div>
            
            )
        })}
        </div>
        
    )
}