import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useSelector } from "react-redux";

import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  margin: 20px 10px 10px 0px;
  width: 40%;
  border: none;
  padding: 10px;
  background-color: #79c0f2;
  &:disabled {
    background-color: skyblue;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
  text-align: left;
  margin: 10px 0px;
  font-size: 12px;
`;

const Error = styled.b`
  color: red;
  margin: 20px 0px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    const email = username;
    login(dispatch, { email, password });
  };

  return (
    <div>
      <Navbar />
      <Announcements />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error ? <Error>Email or Password is wrong</Error> : null}
            <Button onClick={handleClick} disabled={isFetching}>
              Log In
            </Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
