import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCart, AccountBox } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MenuItems = (props) => {
    return (<div className="navbar-menu-item" > {props.menu} </div>)
}


const Menus = [
    {
        MenuName: "Products",
        url: "/products"
    },
    {
        MenuName: "About",
        url: "/about"
    },
    {
        MenuName: "Contacts",
        url: "/contacts"
    }];

const ShoppingCartMenuDiv = styled.div`
        margin-right: 10px;
        height: 30px;
        padding: 0px 10px;
        transition: all 0.6s ease;
        align-self: center;
        &:hover{
            background-color: #79C0F2;
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
        &:hover{
            background-color: #79C0F2;
            transform: scale(1.04);
            border-radius: 30px;
}`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    console.log(quantity);
    return (<div className="navbar-container" >
        <div className="navbar-menu-left" >
            <div className="navbar-menu-title" >
                <Logo />
            </div>
        </div>
        <div className="navbar-menu-center" >
            <div className="navbar-menu-search" >
                <input placeholder='Search products...' />
                <Search id="search-icon" />
            </div>
        </div >
        <div className="navbar-menu-right" >
            <div className="navbar-menu-items" > {
                Menus.map((item, ind) => <Link to={item.url} style={{ textDecoration: 'none', color: 'black' }}><MenuItems menu={item.MenuName}
                    key={ind}> </MenuItems></Link>)}
            </div >
            <div className="navbar-right-menu-items" >
                <ShoppingCartMenuDiv >
                    <Badge badgeContent={quantity}
                        color="secondary" >
                        <ShoppingCart />
                    </Badge> </ShoppingCartMenuDiv >
                <ProfileMenuDiv >
                    <AccountBox />
                </ProfileMenuDiv>
            </div>
        </div>
    </div >
    )
}

export default Navbar;