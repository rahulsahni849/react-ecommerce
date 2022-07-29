import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Container = styled.div`
  background-color: #cfe9f3;
  border-radius: 60%;
  cursor: pointer;
  font-family: AudioWide;
`;

const LogoText = styled.p`
  transition: all 0.7s ease;
  color: black;
  text-decoration: none;
  text-transform: none;
  &:hover {
    transform: scale(1.1);
  }
`;
const Logo = () => {
  return (
    <Container>
      <LogoText>
        <Link className="links" to="/product">
          Wi-SHOP
        </Link>
      </LogoText>
    </Container>
  );
};

export default Logo;
