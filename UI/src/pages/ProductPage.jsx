import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    padding: 50px;

    display:flex;
    background-color: #EEEEEE;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const ImageContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    padding: 0px 50px;
    
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: 200;
`
const Description = styled.p`
    font-size: 16px;
    text-align: left;
    margin: 20px 0px;
    letter-spacing: 1.2px;
    
`
const Price = styled.span`
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px 40px 20px 0px;
    display: flex;

`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;


`
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 10px;
    
    &:hover{
        transition: all 0.6s ease-in-out;
        transform: scale(1.1);
    }
`
const FilterSize = styled.select`
    margin: 0px 10px;
    font-size: 16px ;
    border: 2px solid #79C0F2;
    padding: 0px 10px;
    border-radius: 20px;
    text-align: center;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Remove = styled.button`
    border: none;    
    font-size: 20px;
    font-weight: 400;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    border: 1px solid #79C0F2;
    padding: 0px 10px;
`
const Add = styled.button`
    border: none;
    font-weight: 400;
    font-size: 20px;
`
const Button = styled.button`
    border: 2px solid #79C0F2;
    color: black;
    border-radius: 30px;
    padding: 10px;

    &:hover{
        transition: all 0.5s ease-in-out;
        transform: scale(1.04);
        background-color: #79C0F2;
        color: white;
    }
`

//const AddContainer = styled

const ProductPage = () => {
    const [quantity, setQuantity] = useState(0);
    const handleClick = (value) => {
        if (value === "add") {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else if (value === "remove" && quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }
    return (
        <Container>
            <ImageContainer>
                <Image src="/Images/product-1.jpg" />
            </ImageContainer>
            <InfoContainer>
                <Title>Book 1</Title>
                <Description>hacking book for intermediate level  Pariatur duis cupidatat ut irure sint ex occaecat laboris eu elit ullamco dolor sunt. Commodo voluptate veniam consectetur sint nulla nisi irure. Occaecat exercitation exercitation duis sit eiusmod adipisicing non exercitation veniam. Laborum minim eu adipisicing elit cillum esse non sunt ametSunt adipisicing nisi consequat irure duis adipisicing ipsum ut. Cillum nostrud dolore duis aute quis magna sit nulla aliquip aliquip anim anim in Lorem. Sit id irure incididunt dolore in ad exercitation cupidatat mollit esse ea. Deserunt dolore ullamco id laboris ullamco cillum labore reprehenderit laboris minim do. Ea ad cupidatat pariatur aute est reprehenderit enim labore in. Eu nostrud sint Lorem minim.
                    Proident commodo tempor ipsum irure veniam consequat eu nisi deserunt id non adipisicing. Ex in occaecat enim incididunt consectetur nulla officia excepteur. Consectetur mollit amet incididunt nisi aliqua mollit aliqua culpa elit non do ullamco. Ipsum do nulla exercitation do cillum laboris et commodo commodo eu duis sit anim amet. Sit nulla tempor sint elit.
                </Description>
                <Price>Price: 20$</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="red" />
                        <FilterColor color="blue" />
                        <FilterColor color="green" />
                        <FilterColor color="yellow" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>s</FilterSizeOption>
                            <FilterSizeOption>m</FilterSizeOption>
                            <FilterSizeOption>l</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleClick("remove")}> - </Remove>
                        <Amount>{quantity}</Amount>
                        <Add onClick={() => handleClick("add")}> + </Add>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Container>
    )
}

export default ProductPage;
