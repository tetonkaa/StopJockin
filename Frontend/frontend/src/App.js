import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Home from './pages/Home'
import './App.css';
import SignUp from './pages/SignUp'
import Nav from './components/Nav'
import Login from './pages/Login'
import Barbershop from "./pages/barbershop";
import Lot7 from "./pages/lot-7";
import Products from "./pages/products";
import SnoBall from "./pages/snoBall"
import Footer from './components/Footer'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  

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
        console.log(localStorage.token)
        setIsLoggedIn(true)
    }
  }, [localStorage.token])



  return (
    <main>

      <Nav />
      <Routes>
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/barbershop" element={<Barbershop setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/Lot-7" element={<Lot7 setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/Products" element={<Products setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}></Route>
        <Route path="/SnoBalls" element={<SnoBall setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} user={user}/>}
        ></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} user={user}/>}
        ></Route>
      </Routes>
      <Footer isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </main>
  );
}

export default App;
