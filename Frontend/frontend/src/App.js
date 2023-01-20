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


function App() {



  return (
    <main>

      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/barbershop" element={<Barbershop/>}></Route>
        <Route path="/Lot-7" element={<Lot7/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/SnoBalls" element={<SnoBall/>}></Route>      
        
        
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
