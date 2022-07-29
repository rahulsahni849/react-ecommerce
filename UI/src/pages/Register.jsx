<<<<<<< HEAD
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import React from "react";
=======
import styled from 'styled-components'
import React from 'react'
>>>>>>> dbce43492a249a6339914c1e9059aa8d124a479d

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
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #79c0f2;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: left;
`;
const Register = () => {
  return (
    <div>
      <Navbar />
      <Announcements />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="User Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              reprehenderit vitae neque temporibus eius animi dicta dolor,.
            </Agreement>
            <Button>Create</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
