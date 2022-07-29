import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import { Switch } from "react-router-dom";

import Products from './pages/Products'
import Home from './pages/Home.jsx'

import Login from './pages/Login'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage'

function App() {
    const user = true;

    return (
        <Router>
            <Switch>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Redirect />}
                    <Register />
                </Route>

                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                    <Login />
                </Route>

                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/products/:category">
                    <Products />
                </Route>

                <Route path="/product/:id">
                    <ProductPage />
                </Route>

                <Route path="/products">
                    <Products />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;