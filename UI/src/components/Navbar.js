import { Search, ShoppingCart, AccountBox } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import styled from 'styled-components'
import './Navbar.style.css'


const MenuItems = (props) => {
    return (
        <div className="navbar-menu-item">{props.menu}</div>
    )
}

const Menus = ["Products", "About", "Contacts"];

const ShoppingCartMenuDiv = styled.div`
    margin-right: 10px;
    height: 30px;
`;

const ProfileMenuDiv = styled.div`
    margin-right: 15px;
    margin-left: 20px;
    height: 30px;
`;

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-menu-left">
                <div className="navbar-menu-title">
                    <p id="title">Wi-SHOP</p>
                </div>
            </div>
            <div className="navbar-menu-center">
                <div className="navbar-menu-search">
                    <input />
                    <Search id="search-icon" />
                </div>
            </div>
            <div className="navbar-menu-right">
                <div className="navbar-menu-items">
                    {Menus.map((item) => <MenuItems menu={item} />)}
                </div>
                <div className="navbar-right-menu-items">
                    <ShoppingCartMenuDiv>
                        <Badge className="navbar-right-menu-cart-badge" badgeContent={4} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </ShoppingCartMenuDiv>
                    <ProfileMenuDiv>
                        <AccountBox />
                    </ProfileMenuDiv>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
