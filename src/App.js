import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Login from "./components/Login";
import Footer from "./components/Footer";




function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>      
      <Route path="/" element={<Homepage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
    <Footer />                                                                                  
      
    </BrowserRouter>
  );
}

export default App;
