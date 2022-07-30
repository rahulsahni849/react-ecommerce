import React from "react";
import styled from "styled-components";
import swal from "sweetalert2";

const Container = styled.div``;
const Wrapper = styled.div``;

const Shipping = () => {
  return (
    <Container>
      {Swal.fire({
        title: "Success",
        html: <Wrapper>Hello</Wrapper>,
        confirmButtonText: "PLACE ORDER",
      })}
    </Container>
  );
};

export default Shipping;
