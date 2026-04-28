import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";

const CoverWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(/background.png) black;
    background-size: cover;
    margin-top: -15vh;
    background-position: top;
    width:100%;
    height: 115vh;
    
    @media (max-width: 500px) {
        width:100%;
        height: 110vh;
    }

    @media (max-width: 768px) {
        height: 45vh;
        position: relative;
    }
`;

const Headline = styled.div`
    color: white;
    padding-top: 21%;
    text-shadow: 5px 5px 2px black;

    @media (max-width: 1324px) {
        padding-top: 25vw;
    }

    @media (max-width: 1180px) {
        padding-top: 30vw;
    }

    @media (max-width: 768px) {
        padding-top: 16vh;
    }

    @media (max-width: 480px) {
        padding-top: 20vh;
    }
`;

const SectionTitle = styled.div`
    font-family: 'Whitney,serif';
    font-size: 2rem;
    margin: 2vw 2vw 2vw 9vw;

    @media (min-width: 1820px){
        font-size: 4rem;
    }

    @media (min-width: 1648px) and (max-width: 1720px){
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 638px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.5rem;
    }
`;

const Title = styled.div`
    font-family: 'Quattrocento, sans-serif';
    font-size: 4rem;
    text-align: center;
    padding: 0 2rem;
    box-sizing: border-box;

    max-width: 1200px;
    text-align: center;
    margin: auto;

    @media (min-width: 1820px){
        font-size: 6rem;
    }

    @media (min-width: 1648px) and (max-width: 1720px){
        font-size: 5rem;
    }

    @media (max-width: 1324px){
        font-size: 2.5rem;
        font-weight: 800;
        color: #fff;
        text-shadow: 0 5px 16px rgba(0,0,0,0.95);
        -webkit-text-stroke: 0.6px rgba(0,0,0,0.6);
        letter-spacing: 0.02em;
        line-height: 1.25;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 638px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }

    @media (max-width: 320px) {
        font-size: 0.8rem;
    }
`;

const Credits = styled.div`
    font-family: 'Quattrocento, sans-serif';
    font-size: 1.5rem;
    position: absolute;
    text-align: right;
    bottom: 0;
    right: 5%;

    @media (min-width: 1820px){
        font-size: 3rem;
    }

    @media (min-width: 1648px) and (max-width: 1720px){
        font-size: 2rem;
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
        line-height: 0.2rem;
    }
`;

const Heading = () => {
    return (
        <div>
            <CoverWrapper>
                <div>
                    <Navbar/>
                </div>
                <Headline>
                    <SectionTitle>OPINION ARCHIVE</SectionTitle>
                    <Title>‘Matter of opinion’: Notes toward an unsettled purpose
                    </Title>
                    <Credits>
                        <p>Illustration By Saumya Chaudhry</p>
                        <p>Engineering By Julien Remy</p>
                    </Credits>
                </Headline>
            </CoverWrapper>
        </div>
    );
};

export default Heading;