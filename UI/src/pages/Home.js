import Navbar from "../components/Navbar";
import Slider from '../components/Slider'
import Announcements from "../components/Announcements";
import styled from "styled-components";
import ProductsList from "../components/ProductsList";

const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #EEEEEE;
`
const Home = () => {
    return (
        <HomeContainer>
            <Announcements />
            <Navbar />
            <Slider />
            <ProductsList />
        </HomeContainer>

    )
}

export default Home;