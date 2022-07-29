import styled from "styled-components";
import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;

  display: flex;
  background-color: #eeeeee;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
`;
const Description = styled.p`
  font-size: 16px;
  text-align: left;
  margin: 20px 0px;
  letter-spacing: 1.2px;
`;
const Price = styled.span`
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px 40px 20px 0px;
  display: flex;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 10px;

  &:hover {
    transition: all 0.6s ease-in-out;
    transform: scale(1.1);
  }
`;
const FilterSize = styled.select`
  margin: 0px 10px;
  font-size: 16px;
  border: 2px solid #79c0f2;
  padding: 0px 10px;
  border-radius: 20px;
  text-align: center;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Remove = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 400;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  border: 1px solid #79c0f2;
  padding: 0px 10px;
`;
const Add = styled.button`
  border: none;
  font-weight: 400;
  font-size: 20px;
`;
const Button = styled.button`
  border: 2px solid #79c0f2;
  color: black;
  border-radius: 30px;
  padding: 10px;

  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.04);
    background-color: #79c0f2;
    color: white;
  }
`;

//const AddContainer = styled

const ProductPage = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  console.log(id)

  useEffect(() => {
    const getProduct = async () => {
      try {
        console.log("Api Call")
        const res = await publicRequest.get("/products/find/" + id);
        console.log("Response")
        console.log(res)
        setProduct(res.data);
      } catch { }
    };

    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcements />

      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>
            {product.desc}
          </Description>
          <Price>Price: {product.price} $</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color ? product.color.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              )) : <></>}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size ? product.size.map((s) => (
                  <FilterSizeOption key={s} onClick={() => setSize(s)}>{s}</FilterSizeOption>
                )) : <></>}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}> - </Remove>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc ")}> + </Add>
            </AmountContainer>
            <Button onClick={() => handleClick()}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>

      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductPage;
