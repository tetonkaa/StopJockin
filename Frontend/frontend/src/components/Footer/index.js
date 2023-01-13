import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './main.css'


function Footer() {
        
   
    
  return(
            <nav>
           <div className="footerContainer">
           <Link to='/signup'>Employee Portal</Link>
           </div>
            </nav>
        )
      }
      
      export default Footer