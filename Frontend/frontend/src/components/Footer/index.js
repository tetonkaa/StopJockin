import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './main.css'


function Footer(props) {
        
  function logout() {
    localStorage.clear()
    props.setIsLoggedIn(false)
    props.setUser({})
   
  }
  
  
    
  return(
            <nav className="footer">
              <div className="hours">
                <p> HOURS OF OPERATION M-S 9AM THROUGH 5PM</p>
                <h3>Address</h3>
                <p> 3600 Jumonville Street, New Orleans, Louisiana 70122, United States</p>
                <a href="tel:5046137996">Call us at (504) 613-7996</a>
              </div>
           <div className="footerContainer">
            <Link to='/signup'>About</Link>
            { !props.isLoggedIn ?
            <>
           <Link to='/signup'>Employee Portal</Link>
           </>
           :
           <p className="LogoutText" onClick={() => logout()}>Log out</p>
            }
           </div>
            </nav>
        )
      }
      
      export default Footer