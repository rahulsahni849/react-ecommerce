import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getOrders } from "../redux/apiCalls";

import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Orders = () => {
  const { currentUser } = useSelector((state) => state.user);
  const handleClick = () => {
    getOrders(currentUser.accessToken, currentUser._id)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        Orders
        <button onClick={handleClick}>click me</button>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Orders;
