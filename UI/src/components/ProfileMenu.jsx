import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px #edf8ff;
`;
const Title = styled.h5`
  font-weight: normal;
  padding: 25px;
  transition: all 0.5s ease;

  &:hover {
    font-weight: 750;
  }
`;
const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin: 5px;
`;
const Button = styled.button`
  width: 200px;
  margin: 25px;
  padding: 10px;
  font-size: 17.5px;
  text-align: center;
  background-color: white;
  border: 1px solid #3baaf7;
  border-radius: 5px;
  color: #3baaf7;

  transition: font-weight 0.25s ease;

  &:hover {
    font-weight: 750;
  }
`;

const ProfileMenu = () => {
  return (
    <Container>
      <Title>Orders</Title>
      <Title>Profile</Title>
      <Hr />
      <Button>LOGOUT</Button>
    </Container>
  );
};

export default ProfileMenu;
