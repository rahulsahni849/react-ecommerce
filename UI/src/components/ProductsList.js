import styled from 'styled-components'
import { useState } from 'react'
import ProductItem from './ProductItem'
import { shoppingItems } from '../data'


const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

const ViewMoreButton = styled.button`
    margin-top:20px;
    border: none;
    font-size: 16px;
    background-color: #79C0F2;
    color: white;
    border-radius: 20px;
    padding : 10px;


`

const ProductsList = () => {
    const lenOfList = shoppingItems.length;
    const [viewMore, setViewMore] = useState(4);
    var MoreButtonHandler = () => {
        var data = viewMore;
        if (viewMore < lenOfList - 1) {
            if ((viewMore + 4) < lenOfList) {
                data += viewMore + 4;
            } else {
                data += (lenOfList - viewMore);
            }
            setViewMore(data);

        }

    }
    //console.log(`len of data: ${lenOfList} and vieMore : ${viewMore}`)
    return (
        <Container>
            {shoppingItems.slice(0, viewMore).map((item, index) => {
                return <ProductItem item={item} key={index} />
            })}
            {viewMore <= lenOfList && <ViewMoreButton onClick={() => { MoreButtonHandler() }}>View More</ViewMoreButton>}
        </Container>
    )
}


export default ProductsList