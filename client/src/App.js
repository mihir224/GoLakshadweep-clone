import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>      
      <Route path="/" element={<Homepage />}></Route>
      <Route path="login" element={<Homepage />}></Route>
      <Route path="about" element={<Homepage />}></Route>
    </Routes>
    <Footer />                                                                                  
      
    </BrowserRouter>
  );
}

export default App;
