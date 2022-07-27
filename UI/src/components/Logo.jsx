import styled from "styled-components";
import React from "react";

const Container = styled.div`
    background-color: #cfe9f3;
    border-radius: 60%;
    cursor: pointer;
   
`
const LogoText = styled.p`
    font-family: AudioWide;
    transition: all 1.5s ease;
    &:hover{
        transform: rotate(360deg);
}
`
const Logo = () => {
    return (
        <Container>
            <LogoText>
                Wi-SHOP
            </LogoText>
        </Container>
    )
}

export default Logo;