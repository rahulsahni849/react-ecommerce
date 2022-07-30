import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getOrders, getSingleProduct } from "../redux/apiCalls";

import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar.jsx";
import { useState } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperTitle = styled.h1`
  font-weight: bold;
  margin: 20px 20px;
  font-family: AudioWide;
`;
const OrderSearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const OrderSearchInput = styled.input`
  margin: 20px 10px;
  width: 40%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  font-size: 16px;
`;
const OrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 10px;
`;

const OrderImageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-left: 10px;
`;

const OrderImage = styled.img`
  width: 20%;
  align-self: center;
  justify-self: center;
`;

const OrderImageWrapperTextDiv = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  justify-content: center;
`;

const OrderImageWrapperText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 8px;
`;
const OrderInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const OrderInfoWrapperText = styled.p`
  margin: 5px 10px;
  font-weight: bold;
  font-size: 20px;
`;

const OrderStatusWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const OrderStatusWrapperText = styled.p`
  margin: 5px 10px;
  font-weight: bold;
  font-size: 20px;
`;
const OrderComponent = ({ item }) => {
  const [imageUrl, setImageUrl] = useState({});
  useEffect(() => {
    if (item.products[0]) {
      getSingleProduct(item.products[0].productId).then((resp) => {
        console.log(resp.data);
        setImageUrl(resp.data.img);
      });
    }
  }, []);

  return (
    <OrderWrapper>
      <OrderImageWrapper>
        <OrderImage src={imageUrl} />
        <OrderImageWrapperTextDiv>
          <OrderImageWrapperText>{`Order Id: ${item._id}`}</OrderImageWrapperText>
          <OrderImageWrapperText>{`Price: ${item.amount}$`}</OrderImageWrapperText>
        </OrderImageWrapperTextDiv>
      </OrderImageWrapper>
      <OrderInfoWrapper>
        <OrderInfoWrapperText>{item.address}</OrderInfoWrapperText>
      </OrderInfoWrapper>
      <OrderStatusWrapper>
        <OrderStatusWrapperText>Status of order</OrderStatusWrapperText>
        <OrderStatusWrapperText>
          <i>{item.status}</i>
        </OrderStatusWrapperText>
      </OrderStatusWrapper>
    </OrderWrapper>
  );
};

const Orders = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  console.log(orders.length);
  useEffect(() => {
    getOrders(currentUser.accessToken, currentUser._id)
      .then((resp) => {
        console.log(resp.data);
        setOrders(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <WrapperTitle>My Orders</WrapperTitle>
        <OrderSearchWrapper>
          <OrderSearchInput placeholder="Search by name.." />
        </OrderSearchWrapper>
        {orders.length > 0 ? (
          orders.map((item) => {
            return <OrderComponent item={item} />;
          })
        ) : (
          <h1>No Orders yet!</h1>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Orders;
