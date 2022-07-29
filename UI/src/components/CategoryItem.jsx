import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 75vh;
  position: relative;
  margin: 5px;
  height: 70vh;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: 500;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  color: black;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <TitleContainer>
          <Title> {item.title} </Title>
        </TitleContainer>
      </Link>
    </Container>
  );
};

export default CategoryItem;
