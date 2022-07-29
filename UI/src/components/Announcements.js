import styled from "styled-components";
import React from "react";

const Container = styled.div`
    display:flex;
    background-color: #79c0f2;
    height: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 2px;
`

const Label = styled.p`
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 16px;
    transition: all 0.6s ease-in-out;

    &:hover{
        transform: scale(1.2);
    }
`
const Announcements = () => {
    return (<div >
        <Container >
            <Label > Best offer, flat 50 % offer on EVERYTHING </Label>
        </Container >
    </div>

    )
}

export default Announcements;