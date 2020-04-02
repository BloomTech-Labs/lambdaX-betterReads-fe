import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import BetterReadsLogo from '../Images/BetterReadsLogo.jpeg';
import styled from 'styled-components';
import { size, device } from '../breakpoints';

function NavBar() {
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
      <NavLink exact to="/profile">
        {' '}
        Profile{' '}
      </NavLink>
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
  // Mobile ( Small ) STYLES ⬇︎
  @media screen and (${device.mobileS}) and (max-width: ${size.laptop}) {
    display: none;
  }

  // LAPTOP STYLES ⬇︎
  @media screen and (${device.laptop}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;
    max-width: 100%;
    margin: 10px 0px 10px 0px;

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
`;

export default NavBar;
