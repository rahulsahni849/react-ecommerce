import React from "react";
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from "react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcements from "../components/Announcements";
import ProductsList from '../components/ProductsList'

const Select = styled.select`
    maegin:10px;
    padding:10px;
`
const Option = styled.option`
    padding:10px;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:500;
`
const Filter = styled.div``
const FilterContainer = styled.div`
    padding:25px;
    display:flex;
    justify-content:space-between;
`
const Title = styled.h1`
    margin:25px;
`
const Wrapper = styled.div``
const Container = styled.div``

const Products = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;

        setFilters({
            ...filters,
            [e.target.name]: value
        });
    }

    console.log(filters);

    return (
        <Container>
            <Navbar></Navbar>

            <Announcements></Announcements>

            <Wrapper>
                <Title>Products</Title>

                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        {/* Color */}
                        <Select name="color" onChange={handleFilters}>
                            <Option disabled>Color</Option>
                            <Option>Orange</Option>
                            <Option>Black</Option>
                            <Option>Green</Option>
                            <Option>Yellow</Option>
                        </Select>
                        {/* Size */}
                        <Select name="size" onChange={handleFilters}>
                            <Option disabled>Size</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>

                        <Select name="sort" onChange={(e) => setSort(e.target.value)} >
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price Low To High</Option>
                            <Option value="desc">Price High To Low</Option>
                        </Select>
                    </Filter>
                </FilterContainer>

                <ProductsList cat={cat} filters={filters} sort={sort} />
            </Wrapper>

            <Footer></Footer>
        </Container>
    )
}

export default Products;