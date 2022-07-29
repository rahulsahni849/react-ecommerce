import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcements from "../components/Announcements";

const ItemPrice = styled.div`
`
const ItemDetails = styled.div`
`
const Items = styled.div`
    flex:3;
`
const Summary = styled.div`
    flex:1;
`
const CartInfo = styled.div`
    display:flex;
    justify-content:space-between;
`
const Title = styled.h1`
    font-weight:500;
`
const Wrapper = styled.div`
    padding:25px;
`
const Container = styled.div``

const Cart = () => {
    return (
        <Container>
            <Navbar />

            <Announcements />

            <Wrapper>
                <Title>CART</Title>

                <CartInfo>
                    <Items>
                        <ItemDetails></ItemDetails>

                        <ItemPrice></ItemPrice>
                    </Items>

                    <Summary>Summary</Summary>
                </CartInfo>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default Cart;