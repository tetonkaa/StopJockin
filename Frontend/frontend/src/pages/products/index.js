import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './main.css'
import axios from 'axios'
import 'animate.css';
import LoadingSvg from '../products/pulse-multiple.svg'


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
            <h1 className="productsTitle">Stop Jockin Products</h1>
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
    {/* <h1 className=" loader animate__animated animate__pulse animate__infinite 	infinite"> Loading...</h1> */}
    <svg className="loaderSVG" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"/><g><circle cx="4" cy="12" r="3"/><circle cx="20" cy="12" r="3"/><animateTransform attributeName="transform" type="rotate" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1" values="0 12 12;180 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
    

    </div>

}