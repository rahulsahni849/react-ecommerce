import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { register } from "../redux/apiCalls";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar.jsx";
import Announcements from "../components/Announcements";
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  font-weight: 300;
  width: 30%;
  font-size: 16px;
  border: none;
  padding: 13px;
  color: white;
  background-color: #79c0f2;

  &:disabled {
    background-color: lightgray;
  }
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
  text-align: left;
  font-weight: bold;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  margin-right: 10px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const AgreementContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
`;
const Error = styled.b`
  color: red;
  margin: 10px 0px;
  transition: all 0.5s ease-in-out;
`;

const Register = () => {
  const [checkbox, setCheckbox] = useState(true);
  const [cpassword, setCpassword] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const passwordField = useRef();

  const checkPasswordValidation = (pass) => {
    if (pass.length < 8) {
      return false;
    }
    if (
      pass.match(/\d/g).length &&
      pass.match(/\W/g).length &&
      pass.match(/[a-z]/g).length &&
      pass.match(/[A-Z]/g).length
    ) {
      return true;
    }
    return false;
  };

  const matchPassword = (e) => {
    var cpassword = e.target.value;
    var password = passwordField.current.value;
    console.log(cpassword, password);
    if (cpassword === password) {
      setCpassword(true);
    } else {
      setCpassword(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkPasswordValidation(e.target.password.value)) {
      setPasswordValidation(false);
      return;
    }
    setPasswordValidation(true);
    const user = {
      FirstName: e.target.first_name.value,
      LastName: e.target.last_name.value,
      UserName: e.target.user_name.value,
      Email: e.target.email_name.value,
      Password: e.target.password.value,
    };
    console.log(user);
    var response = await register({
      email: user.Email,
      password: user.Password,
    });
    console.log(response);
    if (response && response.status == "201") {
      Swal.fire({
        title: "Success",
        text: "Registration successful",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Server Error",
        text: "Something went wrong while processing, Try again later!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <Announcements />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <Input name="first_name" placeholder="First Name" />
              <Input name="last_name" placeholder="Last Name" />
              <Input name="user_name" placeholder="User Name" />
              <Input name="email_name" placeholder="Email" type="email" />
              <Input
                ref={passwordField}
                required
                name="password"
                placeholder="Password"
                type="password"
              />
              <Input
                required
                name="confirm_password"
                placeholder="Confirm Password"
                type="password"
                onChange={matchPassword}
              />
              <AgreementContainer>
                <Checkbox
                  onClick={() => setCheckbox((checkbox) => !checkbox)}
                />
                <Agreement>I agree to the Terms and Conditions.</Agreement>
              </AgreementContainer>
            </FormContainer>
            {cpassword ? <></> : <Error>Both password does not match</Error>}
            {passwordValidation ? (
              <></>
            ) : (
              <Error>
                Password should be min. of length 8, having [A-Z],[0-9],[a-z]
                and special characters.
              </Error>
            )}
            <Button disabled={checkbox}>Create</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
