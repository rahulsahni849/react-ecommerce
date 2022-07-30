import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Products from "./pages/Products";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Orders from "./pages/Orders.jsx";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/orders">
          <Orders />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
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

        <Route path="/cart">{currentUser ? <CartPage /> : <Login />}</Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
