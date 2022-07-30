import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";

const Container = styled.div``;

const Wrapper = styled.div`
  background-color: #f7f7f7;
  display: flex;
  font-weight: bold;
`;

const ContactImageContainer = styled.div`
  flex: 0.8;
  height: 100%;
  width: 100%;
  padding-right: 30px;
`;
const ContactFormContainer = styled.div`
  flex: 1.2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  background-color: #edf8ff;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-right: 50px;
`;

const Form = styled.form`
  margin: 10px 50px;
`;

const Input = styled.input`
  width: 90%;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: #f7f7f7;
  padding: 7px;
  margin-bottom: 20px;
  margin-right: 30px;
`;

const TextArea = styled.textarea`
  width: 90%;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: #f7f7f7;
  padding: 7px;
  margin-bottom: 20px;
  margin-right: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const FormLeftContainer = styled.div`
  flex: 1;
  width: 50%;
  padding: 10px;
`;

const FormRightContainer = styled.div`
  flex: 1;
  width: 50%;
  padding: 10px;
`;

const Label = styled.label`
  margin-right: 30px;
  display: block;
  margin-bottom: 20px;
`;

const InterestContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin: 8px 7px;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  margin: 8px 0px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  width: 40%;
  background-color: #3baaf7;
  font-weight: bold;
  margin-top: 20px;
  border-radius: 7px;
`;

const Image = styled.img`
  width: 100%;
`;

const ContactPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ContactImageContainer>
          <Image src="https://www.kindpng.com/picc/m/722-7226282_online-shopping-hd-png-download.png" />
        </ContactImageContainer>
        <ContactFormContainer>
          <Form>
            <FormContainer>
              <FormLeftContainer>
                <Label>Full Name</Label>
                <Input name="FirstName" />

                <Label>Email</Label>
                <Input name="Email" />
                <Label>Company Name</Label>
                <Input name="CompanyName" />
                <Label>Select your interesting product..</Label>
                <InterestContainer>
                  <RadioContainer>
                    <RadioButton name="interest"></RadioButton>
                    <RadioLabel>Clothing</RadioLabel>
                  </RadioContainer>
                  <RadioContainer>
                    <RadioButton name="interest"></RadioButton>
                    <RadioLabel>Bags</RadioLabel>
                  </RadioContainer>
                  <RadioContainer>
                    <RadioButton name="interest"></RadioButton>
                    <RadioLabel>Glasses</RadioLabel>
                  </RadioContainer>
                </InterestContainer>
              </FormLeftContainer>
              <FormRightContainer>
                <Label>Phone Number</Label>
                <Input name="PhoneNumber" />
                <Label>No. of Employees</Label>
                <Input name="FirstName" />
                <Label>Describe about your queries</Label>
                <TextArea name="PhoneNumber" rows="10" />
              </FormRightContainer>
            </FormContainer>
            <Button>Send</Button>
          </Form>
        </ContactFormContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ContactPage;
