import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './main.css'


function Nav() {
        
   
    
  return(
            <nav>
           <div className="navContainer">
           <Link to='/Barbershop' >Barbershop</Link>
           <Link to='/SnoBalls' >SnoBalls</Link>
           <Link to='/Lot-7' >Lot7</Link>
           <Link to='/Products' >Products</Link>
           </div>
            </nav>
        )
      }
      
      export default Nav