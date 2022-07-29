import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

import Products from "./pages/Products";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProductPage from "./pages/ProductPage";

import ProductItem from "./components/ProductItem";
import { useSelector } from "react-redux";
import { flushSync } from "react-dom";
import { REGISTER } from "redux-persist";
import CartPage from "./pages/CartPage";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {currentUser ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>
        <Route path="/register">
          {false ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/products/:category">
          <Products />
        </Route>

        <Route path="/product /:id ">
          <ProductItem />
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

        <Route path="/about">
          <h1>In development</h1>
        </Route>

        <Route path="/contacts">
          <h1>In development</h1>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
