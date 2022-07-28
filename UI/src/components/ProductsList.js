import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ProductItem from './ProductItem.jsx'
import { shoppingItems } from '../data'
import React from "react";
import axios from 'axios'

const Container = styled.div `
    display:flex;
    flex-wrap:wrap;
    padding: 20px;
    justify-content: center;
    align-items: center;
`
const ViewMoreButton = styled.button `
    margin-top:20px;
    border: none;
    font-size: 16px;
    background-color: #79C0F2;
    color: white;
    border-radius: 20px;
    padding : 10px;
`

const ProductsList = ({ cat, filters, sort }) => {
        console.log(cat);
        const [products, setProducts] = useState([]);
        const [filteredProducts, setFilteredProducts] = useState([]);

        useEffect(() => {
            console.log("In Effect");
            const getProducts = async() => {
                try {
                    console.log("api call");
                    const res = await axios.get("http://localhost:5000/api/products");
                    console.log(res);
                } catch (err) {
                    console.log(err);
                }
            };

            getProducts();
        }, [cat]);

        const lenOfList = shoppingItems.length;
        const [viewMore, setViewMore] = useState(4);
        var MoreButtonHandler = () => {
                var data = viewMore;
                if (viewMore < lenOfList - 1) {
                    if ((viewMore + 4) < lenOfList) {
                        data += viewMore + 4;
                    } else {
                        data += (lenOfList - viewMore);
                    }
                    setViewMore(data);

                }

            }
            //console.log(`len of data: ${lenOfList} and vieMore : ${viewMore}`)
        return ( <
            Container > {
                shoppingItems.slice(0, viewMore).map((item, index) => {
                    return <ProductItem item = { item }
                    key = { index }
                    />
                })
            } {
                viewMore <= lenOfList && < ViewMoreButton onClick = {
                    () => { MoreButtonHandler() }
                } > View More < /ViewMoreButton>} < /
                Container >
            )
        }


        export default ProductsList;