import Footer from './components/Footer'
import './App.css';
import Home from './pages/Home'
import React from 'react';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import CartPage from './pages/CartPage'
import { Routes, Route } from 'react-router-dom';


function App() {
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
    <Footer />
  </div >
    ;
}
