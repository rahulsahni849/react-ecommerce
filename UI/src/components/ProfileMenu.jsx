import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 2.5px 2.5px #edf8ff;
`;
const Title = styled.h5`
  font-weight: normal;
  padding: 25px;
  transition: all 0.5s ease;
  color: black;

  &:hover {
    font-weight: 750;
  }
`;
const Email = styled.h5`
  font-weight: normal;
  padding: 12.5px 25px;
  font-weight: 750;
`;
const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin: 5px;
`;
const Button = styled.button`
  width: 200px;
  margin: 12.5px 25px;
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
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <Link to="/orders">
        <Title>Orders</Title>
      </Link>
      <Hr />
      <Email>{currentUser.email}</Email>
      <Button>LOGOUT</Button>
    </Container>
  );
};

export default ProfileMenu;
