import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Home from './pages/Home'
import './App.css';

import Nav from './components/Nav'

import Barbershop from "./pages/barbershop";
import Lot7 from "./pages/lot-7";
import Products from "./pages/products";
import SnoBall from "./pages/snoBall"
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Comments from './pages/comments'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [newComment, setNewComment] = useState(true)

  async function getUser(){
    const config = {
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    };
    const userData = await axios.get("http://localhost:8000/user", config)
    setUser(userData.data)
  }


  useEffect(() => {
    if (localStorage.token) {
        getUser()
        console.log('getUser has been run')
        setIsLoggedIn(true)
    }
  }, [localStorage.token])


  return (
    <main>

      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/barbershop" element={<Barbershop/>}></Route>
        <Route path="/Lot-7" element={<Lot7/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/SnoBalls" element={<SnoBall/>}></Route>      
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}></Route>
        <Route path="/comments" element={<Comments setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}></Route>
      
      </Routes>
      <Footer setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
    </main>
  );
}

export default App;
