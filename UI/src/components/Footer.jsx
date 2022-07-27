import React from "react";
import styled from "styled-components";
import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    Room,
    Twitter,
} from "@material-ui/icons";

const Container = styled.div`
    display:flex;
    border:1px solid lightgray;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:25px;
    align-items:center;
`
const Desc = styled.p`
    
`
const SocialConatiner = styled.div`
    width:50%;
    margin:5px;
    display:flex;
    justify-content:space-between;
`
const Center = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:25px;
    align-items:center;
`
const Title = styled.h3``

const CenterList = styled.div`
    margin:5px;
    width:max-content;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
`
const ListItem = styled.div``

const Right = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:25px;
    align-items:center;
`
const ContactItems = styled.div`
    width:max-content;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:start;
`
const ContactItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <h5>Logo</h5>

                <Desc> WeShop means We Shop , Wish and Shop. This is One Destination
                    Store for All your Needs like Clothing, Books etc.
                </Desc>

                <SocialConatiner>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                </SocialConatiner>
            </Left>

            <Center>
                <Title>Links</Title>

                <CenterList>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Profile</ListItem>
                    <ListItem>Orders</ListItem>
                    <ListItem>Products</ListItem>
                </CenterList>
            </Center>

            <Right>
                <Title>Contact Us</Title>
                <ContactItems>
                    <ContactItem>
                        <Room />123 Abcd, Efg Hij
                    </ContactItem>
                    <ContactItem>
                        <Phone />+12 34567890
                    </ContactItem>
                    <ContactItem>
                        <Mail />contact@weshop.com
                    </ContactItem>
                </ContactItems>
            </Right>
        </Container>
    )
}

export default Footer;