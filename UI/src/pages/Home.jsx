<<<<<<< HEAD
import Slider from "../components/Slider";
import Announcements from "../components/Announcements";
import styled from "styled-components";
import ProductsList from "../components/ProductsList";
import React from "react";
import Categories from "../components/Categories";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
`;
const Home = () => {
  return (
    <HomeContainer>
      <Announcements />
      <Slider />
      <Categories />
      <ProductsList />
    </HomeContainer>
  );
};

export default Home;
=======
import styled from "styled-components";
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsList from "../components/ProductsList.jsx";
import Slider from '../components/Slider';
import Announcements from "../components/Announcements";
import Categories from "../components/Categories";

const Container = styled.div``

const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #EEEEEE;
`
const Home = () => {
    return (
        <Container>
            <Navbar />

            <Announcements />

            <HomeContainer>
                <Slider />
                <Categories />
                <ProductsList />
            </HomeContainer>

            <Footer />
        </Container>
    )
};

export default Home;
>>>>>>> af6175d9b28585619a064b1a34d2cf5ceae058dc
