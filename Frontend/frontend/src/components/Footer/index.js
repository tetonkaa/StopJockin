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
            <nav>
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