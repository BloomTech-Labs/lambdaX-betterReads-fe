import React from 'react';
import styled from 'styled-components';
import BooksBanner from '../Images/books-landing-banner-800.jpg';

const LandingPage = (props) => {
    return (
        <PageContainer>
            <Cta>
                <Ctah1>Better Reads</Ctah1>
                <CtaText>Sign up or login to see our top picks for you</CtaText>
            </Cta>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    height: 500px;
    background-image: url(${BooksBanner})
`;
const Cta = styled.div`
    height: 100%;
    width: 65%;
    margin: 0 auto;
    background: rgb(0,0,0, .55);
    // background: white;
`;

const Ctah1 = styled.h1`
    color: rgb(65,139,247);
    font-size: 3.5rem;
    text-shadow: 0 3px 4px white;
    margin-top: 10px;
    padding-top: 80px;
`;

const CtaText = styled.p`
    font-size: 2.3rem;
    text-shadow: 0 5px 2px black,  0 -2px 2px black;
    margin-top: 10px;
    padding-top: 40px;
`;

export default LandingPage;