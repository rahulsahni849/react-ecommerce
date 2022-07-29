import React from 'react'
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";

const LogoContainer = styled.div`
  background-color: #cfe9f3;
  border-radius: 60%;
  cursor: pointer;
  font-family: AudioWide;
  opacity:0.25;
`;
const LogoText = styled.p`
    font-size:250px;
    text-align:center;
    width:100%;
    height:100%;
    opacity:0.25;
`;
const Logo = () => {
    return (
        <LogoContainer>
            <LogoText>
                Wi-SHOP
            </LogoText>
        </LogoContainer>
    );
};

const Container = styled.div``;
const Wrapper = styled.div`
    padding:25px;
`;
const ContentContainer = styled.div`
    display:flex;
    border:1px solid lightgray;
    justify-content:space:between;
    margin:25px;
`;
const ImageContainer = styled.div`
`;
const Content = styled.div`
    width:100%;
`;
const Image = styled.img`
    height:400px;
`;
const Title = styled.h1`
    padding:12.5px 25px;
    text-align:center;
    font-weight:500;
    font-size:50px;
    text-shadow: 2.5px 2.5px lightgray;
    letter-spacing:5px;
`;
const Text = styled.p`
    padding:12.5px 25px;
    letter-spacing:2.5px;
    word-spacing:10px;
`;
const DirectorContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const DirectorContent = styled.div`
    display:flex;
    justify-content:space-between;`;
const DirectorItem = styled.div`
    border:1px solid lightgray;
    margin:5px;
`;

const AboutPage = () => {
    return (
        <Container>
            <Navbar />

            <Announcements />

            <Wrapper>
                <ContentContainer>
                    <ImageContainer>
                        <Image src="https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </ImageContainer>

                    <Content>
                        <Title>HISTORY</Title>

                        <Text>Wi-Shop was Started in 2020. While the Pandamic was going on we were
                            Planning the Next Unicorn.<br /><br />
                            We Started from Facebook with 5 members in our Team and now in 2022
                            we have more than 500 members.<br /><br />
                            Our First office was in Amsterdam and now we are in more than 7 Countries.<br /><br />
                            In the First year we had 5000 Visitors to Our Site which was in itself a Big Achivement.<br /><br />
                            Now we have Served more than 5 million+ Happy and Loyal Coustomers around the World.
                        </Text>
                    </Content>
                </ContentContainer>
                <ContentContainer>

                    <Content>
                        <Title>MISSION</Title>

                        <Text>Our Mission is to Help the Local Buisness  Grow faster and Compete against Big Gaints.<br /><br />
                            We want to give our Customers the Best Quality at the most Affordable Price.<br /><br />
                            Our Goal is to provide the Best Customer Service in the Market.<br /><br />
                            We want to provide our Customers with Reliable and Value for Money Products.
                        </Text>
                    </Content>

                    <ImageContainer>
                        <Image src="https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </ImageContainer>
                </ContentContainer>
                <ContentContainer>
                    <ImageContainer>
                        <Image src="https://images.pexels.com/photos/11106461/pexels-photo-11106461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    </ImageContainer>

                    <Content>
                        <Title>VISION</Title>

                        <Text>Our Vision is to Dominate the worlds E - Commerce Market. <br /><br />
                            To Grow Our Company For the People and By the People.<br /><br />
                            We want to Leave Positive Impact on EveryBody from Seller to Customer and back.<br /><br />
                            Our Vision till 2025 is to Enroll 500,000 Local Sellers with 50 million Users
                            acrooss the Globe.<br /><br />
                            We are Looking Forward to Acquire  Varios Companies around the Globe to Achive our Vision.
                        </Text>
                    </Content>
                </ContentContainer>
                <DirectorContainer>
                    <Title>DIRECTORS</Title>

                    <DirectorContent>
                        <DirectorItem>
                            <Image src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=" />

                            <Text>Director 1</Text>
                        </DirectorItem>
                        <DirectorItem>
                            <Image src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=" />

                            <Text>Director 2</Text>
                        </DirectorItem>
                        <DirectorItem>
                            <Image src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=" />

                            <Text>Director 3</Text>
                        </DirectorItem>
                    </DirectorContent>
                </DirectorContainer>
            </Wrapper>

            <Footer />
        </Container>
    )
}

export default AboutPage;