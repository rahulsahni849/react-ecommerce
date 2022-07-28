import Slider from '../components/Slider'
import Announcements from "../components/Announcements";
import styled from "styled-components";
import ProductsList from "../components/ProductsList";
import Categories from "../components/Categories";

const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #EEEEEE;
`
const Home = () => {
    return (
        <HomeContainer>
            <Announcements />
            <Slider />
            <Categories />
            <ProductsList />
        </HomeContainer>
    )
}

export default Home;