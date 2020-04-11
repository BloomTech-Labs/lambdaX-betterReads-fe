import React from 'react';
import styled from 'styled-components';
import BooksBanner from '../Images/books-landing-banner.jpg';

import LoginButton from './LoginButton';

const LandingPage = (props) => {
    return (
        <PageContainer>
            <Cta>
                <Ctah1>Better Reads</Ctah1>
                <CtaText>Sign up or login to see our top picks for you</CtaText>
                <RegisterDiv>
                    <LoginButton />
                </RegisterDiv>
            </Cta>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    height: 650px;
    background-color:rgb(65,139,247);
    background-image: url(${BooksBanner});
    background-attachment: fixed;
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
    text-shadow: 3px 3px 2px white, -3px -3px 2px white, -3px 3px 2px white, 3px -3px 2px white;
    margin-top: 20px;
    padding-top: 110px;
`;

const CtaText = styled.p`
    font-size: 2.3rem;
    text-shadow: 0 5px 2px black,  0 -2px 2px black;
    margin-top: 130px;
    padding-top: 40px;
    @media (max-width: 768px){
        margin-top: 40px;
    }
`;

const RegisterDiv = styled.div`
    width: 100%;
    margin-top: 80px;
    ${LoginButton} a{
        background: rgb(105,121,248);
        padding: 12px 12.5%;
        width: 100px;
        height: 100px;
        border-radius: 5px;
        font-size: 1.25rem;
    }
    
`;

export default LandingPage;