import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

import Products from "./pages/Products";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import ProductItem from "./components/ProductItem";
import { useSelector } from "react-redux";
import { flushSync } from "react-dom";
import { REGISTER } from "redux-persist";

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Router>
      <Switch>
        {/* <Route path="/register">
                    {user ? <Redirect to="/"/> : <Redirect / >}
                    <Reegister />
                </Route>
                
                <Route path="/login">
                    {user ? <Redirect to="/"/> : <Login/ >}
                    <Login />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route> */}
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
