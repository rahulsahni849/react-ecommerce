import React from "react";
import styled from "styled-components";
import { Search, ShoppingCart, AccountBox } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import ProfileMenu from "./ProfileMenu";

import Logo from "./Logo";
import "./Navbar.style.css";

const MenuItems = (props) => {
  return <div className="navbar-menu-item"> {props.menu} </div>;
};
const Menus = [
  {
    MenuName: "Products",
    url: "/products",
  },
  {
    MenuName: "About",
    url: "/about",
  },
  {
    MenuName: "Contacts",
    url: "/contact",
  },
];

const ShoppingCartMenuDiv = styled.div`
        margin-right: 10px;
        height: 30px;
        padding: 0px 10px;
        transition: all 0.6s ease;
        align-self: center;
        &:hover{
            background - color: #79C0F2;
            transform: scale(1.04);
            border-radius: 30px;
    }`;

const ProfileMenuDiv = styled.div`
  margin-right: 15px;
  margin-left: 20px;
  height: 30px;
  padding: 0px 10px;
  align-self: center;
  transition: all 0.6s ease;
  &:hover {
    background-color: #79c0f2;
    transform: scale(1.04);
    border-radius: 30px;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
`;
const ProfileMenuContainer = styled.div`
  position: absolute;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [profileMenu, setProfileMenu] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  function initProfileMenu() {
    setProfileMenu((prev) => !prev);
  }

  console.log(quantity);
  return (
    <div className="navbar-container">
      <div className="navbar-menu-left">
        <div className="navbar-menu-title">
          <Logo />
        </div>{" "}
      </div>{" "}
      <div className="navbar-menu-center">
        <div className="navbar-menu-search">
          <input placeholder="Search products..." />
          <Search id="search-icon" />
        </div>{" "}
      </div>
      <div className="navbar-menu-right">
        <div className="navbar-menu-items">
          {Menus.map((item, ind) => (
            <Link
              to={item.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <MenuItems menu={item.MenuName} key={ind}>
                {" "}
              </MenuItems>
            </Link>
          ))}
        </div>

        <div className="navbar-right-menu-items">
          <ShoppingCartMenuDiv>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCart />
              </Badge>
            </Link>
          </ShoppingCartMenuDiv>

          <ProfileContainer>
            <ProfileMenuDiv onClick={initProfileMenu}>
              <AccountBox />
            </ProfileMenuDiv>
            {profileMenu ? (
              currentUser ? (
                <ProfileMenuContainer>
                  <ProfileMenu />
                </ProfileMenuContainer>
              ) : (
                <Redirect to="/login" />
              )
            ) : (
              <></>
            )}
          </ProfileContainer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
