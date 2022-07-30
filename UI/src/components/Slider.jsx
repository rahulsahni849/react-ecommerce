import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { ItemsData } from "../data";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  background-color: white;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const SliderWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.index * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  padding: 30px;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 10%;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-top: 90px 0px 50px 10px;
  text-align: left;
`;
const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 0px;
  letter-spacing: 3px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  align-self: flex-start;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  width: 100px;
  border: none;
  background-color: #79c0f2;
  border-radius: 30px;
  color: white;
  cursor: pointer;
`;

// component function

const SlideComp = (props) => {
  return (
    <Slide>
      <ImageContainer>
        <Image src={props.url}></Image>
      </ImageContainer>
      <InfoContainer>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <ButtonContainer>
          <Button>Buy</Button>
        </ButtonContainer>
      </InfoContainer>
    </Slide>
  );
};

const Slider = () => {
  const [SlideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : 2);
    } else {
      setSlideIndex(SlideIndex < 2 ? SlideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <SliderWrapper index={SlideIndex}>
        {ItemsData.map((item, ind) => {
          return (
            <SlideComp
              key={ind}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </SliderWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Slider;
