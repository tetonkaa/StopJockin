import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './main.css'
import axios from 'axios'
import 'animate.css';




export default function Products() {
    const [products, setProducts] = useState({})
    const [productList, setProductList] = useState()
    
    async function getProductInfo() {
        const { data } = await axios.get('http://localhost:5000/api/Posts')
        return data
        
        
    }
    
    useEffect(() => {
    getProductInfo().then(data => setProducts(data))
}, [])

useEffect(() => {
    setProductList({products}.products.docs)
    
}, [products])




    
    
    
    function loaded() {
    
        
        return (
            
            <div className="productsContainer" >
            <h1>Products</h1>
            {console.log({products}.products.docs)}
            {productList.map((product, i) => {
                return (<div >
            <div className="eachProduct">
            <img className="productPhoto" src={product.productImageLink}></img>
            <p className="productText">{product.productName}</p>
            <p className="productText">{product.ProductDescription}</p>
            <p className="productText">{product.price}</p>
            </div>
            </div>
            
            )
        })}
        </div>
        
        )
    }
    
    return productList ? loaded() : 
    <div className="productsContainer">
    <h1 className=" loader animate__animated animate__pulse animate__infinite 	infinite"> Loading...</h1>
    </div>

}