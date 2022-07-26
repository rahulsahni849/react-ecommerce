import styled from "styled-components";


const Container = styled.div`
    display:flex;
    background-color: #79c0f2;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 20px;
    box-shadow: 5px 5px rgba(121, 192, 242,0.3);
    padding: 10px;
    margin: 2px
`
const Announcements = () => {
    return (
        <div>
            <Container>
                Best offer , flat 50% offer on EVERYTHING
            </Container>
        </div>

    )
}

export default Announcements;





