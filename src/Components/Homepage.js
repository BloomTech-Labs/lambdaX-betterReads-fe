import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const HomePage = (props) => {
  return (
    <HomeContainer>
      <Nav></Nav>
      <h1>HOME</h1>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgb(23, 35, 43), rgb(58, 95, 114));
  background-attachment: fixed;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export default HomePage;
