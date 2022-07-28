import styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import React from 'react';

const Info = styled.div `
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    border-radius: 20px;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
`
const Container = styled.div `
    flex:1;
    margin: 5px;
    min-width: 350px;
    height: 280px;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }

`

const Image = styled.img `
    height: 75%;
    width: 75%;
    z-index: 2;
    justify-content: center;
    align-items: center;

`

const Circle = styled.div `
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    justify-content: center;
    align-items: center;
    
`


const Icon = styled.div `
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    z-index: 2;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);

    }
`
const ProductItem = ({ item }) => {
    return ( <
        Container >
        <
        Circle / >
        <
        Image src = { item.image } > < /Image> <
        Info >
        <
        Icon >
        <
        SearchOutlined / >
        <
        /Icon> <
        Icon >
        <
        ShoppingCartOutlined / >
        <
        /Icon> <
        Icon >
        <
        FavoriteBorderOutlined / >
        <
        /Icon> < /
        Info > <
        /Container>
    )
}

export default ProductItem;