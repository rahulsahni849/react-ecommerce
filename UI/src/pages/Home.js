import Navbar from "../components/Navbar";
import Slider from '../components/Slider'
import Announcements from "../components/Announcements";
import styled from "styled-components";

const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
`
const Home = () => {
    return (
        <HomeContainer>
            <Announcements />
            <Navbar />
            <Slider />
        </HomeContainer>

    )
}

export default Home;