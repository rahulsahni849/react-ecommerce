import styled from "styled-components";
import { ArrowBackIos,ArrowForwardIos } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    background-color: white;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props)=> props.direction==="left" && "10px"};
    right: ${(props)=> props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const SliderWrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`
const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;

`
const Image = styled.img`
    height: 80%;
    padding: 30px;
`
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 50px;
    align-self: flex-end;
    margin-top: auto;
    margin-bottom: 10%;
`

const Title = styled.h1`
    font-size: 70px;
    margin-top: 90px 0px 50px 10px;
    text-align: left;
`
const Description = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin: 50px 0px;
    letter-spacing: 3px;
    text-align: left;
`

const ButtonContainer = styled.div`
    align-self: flex-start;    
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

// component function

const SlideComp = (props) =>{
    return (
        <Slide>
            <ImageContainer>
                    <Image src={props.url} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{props.title}</Title>
                    <Description>{props.description}</Description>
                    <ButtonContainer>
                        <Button>click to BUY</Button>
                    </ButtonContainer>
             </InfoContainer>
        </Slide>
    )
}

const Slider= ()=>{
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBackIos />
            </Arrow>
            <SliderWrapper>
                <SlideComp />
                <Slide>
                    <ImageContainer>
                            <Image src="/Images/product-1.jpg" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>Best book 1</Title>
                            <Description> for hacking Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolore veniam commodi aut, quisquam nemo, assumenda provident aspernatur corporis quod asperiores? Alias accusamus repudiandae exercitationem perspiciatis temporibus, dicta quae culpa.</Description>
                            <ButtonContainer>
                                <Button>click to BUY</Button>
                            </ButtonContainer>
                    </InfoContainer>
                </Slide>
             <Slide>
                <ImageContainer>
                        <Image src="/Images/product-1.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Best book 2</Title>
                        <Description> for hacking Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolore veniam commodi aut, quisquam nemo, assumenda provident aspernatur corporis quod asperiores? Alias accusamus repudiandae exercitationem perspiciatis temporibus, dicta quae culpa.</Description>
                        <ButtonContainer>
                            <Button>click to BUY</Button>
                        </ButtonContainer>
                    </InfoContainer>
                </Slide>
            </SliderWrapper>
            <Arrow direction="right">
                <ArrowForwardIos />
            </Arrow>
        </Container>
    )
}

export default Slider;

