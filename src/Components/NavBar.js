import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import WithAuth from './WithAuth';
import LoginButton from './LoginButton';
import BetterReadsLogo from '../Images/BetterReadsLogo.jpeg';
import styled from 'styled-components';

function NavBar() {
  const [isAuthenticated, setAuth] = useState(false);
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <Routes>
      <Logo src={BetterReadsLogo} />

      <NavLink exact to="/">
        {' '}
        Bookshelves{' '}
      </NavLink>

      <NavLink exact to="/">
        {' '}
        Discover{' '}
      </NavLink>

      <NavLink exact to="/Profile">
        {' '}
        Profile{' '}
      </NavLink>

      {/* <WithAuth /> */}
      <LoginButton />

      <input
        value={search}
        placeholder="Search Reads"
        onChange={handleSearch}
      />

      <ProfileImage
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS73zR9Totq6-MSUAshZ7E_RM4gbjIFymJh4oCmlPbxkT6Nnp38'
        }
      />
    </Routes>
  );
}

const Routes = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
  max-width: 100%;
  margin: 10px 0px 10px 0px;

  @media (max-width: 560px) {
    margin: 0 auto;
  }

  a {
    padding: 10px;
    color: white;
    text-decoration-color: rgb(22, 35, 43);

    .active {
      color: red;
    }
  }

  input {
    width: 150px;
    height: 25px;
    display: flex;
    text-align: center;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
    margin-top: -50px;
  }
`;

const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid white;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  /* margin-left: 20px; */
`;

export default NavBar;
