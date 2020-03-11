import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { size, device } from "../breakpoints";

const user = {
  id: 1, // Primary Key
  username: "AWatts",
  email: "AlanWatts@gmail.com",
  password: "PhilosophyIsCool100",
  location: "Austin",
  bio: "",
  image:
    "https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2014/01/alanwatts.jpg?w=680&ssl=1",
  banner_image:
    "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  // banner_image: 'https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',

  // Extras we could add to the database?
  firstName: "Alan",
  lastName: "Watts",
  following: 1,
  followers: 279,

  // All the users bokshelves they have created ⬇︎
  user_bookshelves: [
    {
      id: 1, // Primary Key
      shelf_name: "Plilosophy",
      user_id: 1,
      user_type: "Creator",

      bookshelf_books: [
        {
          id: 1,
          book_id: 1,
          bookshelf_id: 1,
          isbn: 1253
        }
      ]
    },

    {
      id: 2, // Primary Key
      shelf_name: "Fun",
      user_id: 1,
      user_type: "Creator",

      bookshelf_books: [
        {
          id: 1,
          book_id: 1,
          bookshelf_id: 2,
          isbn: 1045
        },
        {
          id: 2,
          book_id: 2,
          bookshelf_id: 2,
          isbn: 7394
        }
      ]
    }
  ]
};

const Profile = props => {
  return (
    <ProfileContainer>
      <BackgroundImageContainer>
        <BackgroundImage src={user.banner_image} />
      </BackgroundImageContainer>

      <div className="Section Profile">
        <img className="ProfilePicture" src={user.image} />
      </div>

      <UserInfoContainer>
        <div className="Section User">
          <h1 className="Name">
            {user.firstName} {user.lastName}
          </h1>
          <p className="Location">{user.location}</p>
        </div>

        <div className="Section Social">
          <div>
            <h1>{user.followers}</h1>
            <p>Followers</p>
          </div>

          <div>
            <h1>{user.following}</h1>
            <p>Following</p>
          </div>
        </div>

        <div className="Section Buttons">
          <button className="Follow">Follow</button>
          <button className="Message">Message</button>
        </div>
      </UserInfoContainer>

      <BookshelvesAndActivityContainer>
        <Bookshelves>
          <h2>{user.firstName}'s Bookshelves</h2>
          {user.user_bookshelves.map(book => (
            <div className="SingleBookshelf">
              <p>{book.shelf_name}</p>
              <p>{book.bookshelf_books.length}</p>
            </div>
          ))}
        </Bookshelves>

        <Activity>
          <h1>Activity</h1>
        </Activity>
      </BookshelvesAndActivityContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  // Constants ⬇︎
  min-height: 90vh;
  max-width: 1500px;
  margin: 0 auto;

  // MOBILE ( Small ) STYLES ⬇︎
  @media screen and ${device.mobileS} {
    .Section.Profile {
      position: absolute;
      width: 125px;
      height: 125px;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid white;
      margin-top: -66px;
      margin-left: 3vh;
    }

    .ProfilePicture {
      width: 100%;
      height: auto;
    }
  }

  // TABLET STYLES ⬇︎
  @media screen and ${device.tablet} {
    .Section.Profile {
      position: absolute;
      width: 150px;
      height: 150px;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid white;
      margin-top: -75px;
      margin-left: 25px;
    }

    .ProfilePicture {
      width: 100%;
      height: auto;
    }
  }

  // LAPTOP STYLES ⬇︎
  @media screen and ${device.laptop} {
    h1 {
      margin: 5px;
    }

    p {
      margin: 10px;
      color: rgb(171, 171, 171);
    }

    .Section.Profile {
      position: absolute;
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid white;
      margin-top: -100px;
      margin-left: 50px;
    }

    .ProfilePicture {
      width: 100%;
      height: auto;
    }
  }
`;

const BackgroundImageContainer = styled.div`
  // MOBILE ( Small ) STYLES ⬇︎
  @media screen and ${device.mobileS} {
    width: 100%;
    overflow: hidden;
  }

  // TABLET STYLES ⬇︎
  @media screen and ${device.tablet} {
    width: 100%;
    height: auto;
  }

  // LAPTOP STYLES ⬇︎
  @media screen and ${device.laptop} {
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BackgroundImage = styled.img`
  // MOBILE ( Small ) STYLES ⬇︎
  @media screen and ${device.mobileS} {
    width: auto;
    height: 300px;
  }

  // TABLET STYLES ⬇︎
  @media screen and ${device.tablet} {
    width: 100%;
    height: auto;
  }

  // LAPTOP STYLES ⬇︎
  @media screen and ${device.laptop} {
    width: auto;
    height: auto;
    min-height: 400px;
  }
`;

const UserInfoContainer = styled.div`
  // MOBILE ( Small ) STYLES ⬇︎
  @media screen and ${device.mobileS} and (max-width: ${size.mobileL}) {
    display: flex;
    flex-wrap: wrap;
    color: white;

    .Section.User {
      width: 90%;
      margin: 0 auto;
      border-bottom: 1px solid white;

      .Name {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 165px;
      }

      .Location {
        margin-top: 0px;
        margin-left: 165px;
      }
    }

    .Section.Social {
      display: flex;
      width: 50%;
      justify-content: space-evenly;
      align-items: center;

      h1 {
        margin: 0px;
      }

      p {
        margin: 0px;
        color: rgb(171, 171, 171);
      }
    }

    .Section.Buttons {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      button {
        font-size: 18px;
        width: 100px;
        margin: 5px;
        border-radius: 5px;
      }

      button.Follow {
        background-color: rgb(105, 121, 248);
        border: 1px solid rgb(105, 121, 248);
      }

      button.Message {
        border: 1px solid rgb(105, 121, 248);
      }
    }
  }

  // TABLET STYLES ⬇︎
  @media screen and ${device.mobileL} and (max-width: ${size.laptop}) {
    display: flex;
    margin: 0 auto;
    margin-left: 200px;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 50px;
    border: none;
    align-items: center;

    .Section {
      color: white;
      width: 30%;
    }

    .Section.User {
      margin: 0 auto;

      .Name {
        margin: 0px;
      }

      .Location {
        margin: 0px;
        color: rgb(171, 171, 171);
      }
    }

    .Section.Social {
      display: flex;
      width: 50%;
      justify-content: space-evenly;
      align-items: center;

      h1 {
        margin: 0px;
      }

      p {
        margin: 0px;
        color: rgb(171, 171, 171);
      }
    }

    .Section.Buttons {
      width: 45%;
      display: flex;
      justify-content: space-batween;
      align-items: center;

      button {
        font-size: 18px;
        width: 100px;
        margin: 5px;
        border-radius: 5px;
      }

      button.Follow {
        background-color: rgb(105, 121, 248);
        border: 1px solid rgb(105, 121, 248);
      }

      button.Message {
        border: 1px solid rgb(105, 121, 248);
      }
    }
  }

  // LAPTOP STYLES ⬇︎
  @media screen and ${device.laptop} {
    display: flex;
    margin: 0 auto;
    margin-left: 250px;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 50px;
    border: none;
    width: 75%;
    align-items: center;

    .Section {
      color: white;
      width: 30%;
    }

    .Section.Social {
      display: flex;
      width: 400px;
      justify-content: space-evenly;
    }

    .Buttons {
      display: flex;
      width: 400px;
      justify-content: space-evenly;
      align-items: center;
      transition: 0.5s;

      button {
        font-size: 25px;
        height: 50px;
        min-width: 100px;
        border-radius: 10px;
        border: 1px solid rgb(105, 121, 248);
      }

      button.Follow {
        background-color: rgb(105, 121, 248);
      }

      button:hover {
        cursor: pointer;
        border: 1px solid rgb(33, 33, 33);
        transition: 0.5s;
      }
    }
  }
`;

const BookshelvesAndActivityContainer = styled.div`
  // MOBILE ( Small ) STYLES ⬇︎
  @media screen and ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }

  // TABLET STYLES ⬇︎
  @media screen and ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  }

  // LAPTOP STYLES ⬇︎
  @media screen and ${device.laptop} {
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

const Bookshelves = styled.div`

    // MOBILE ( Small ) STYLES ⬇︎
    @media screen and ${device.mobileS} {

        width: 90%;
        margin: 0 auto;
        border: 1px solid white;
        margin-top: 10px;
        color: white;

        h2 {

            margin: 0px;
            font-size: 18px;
            padding: 10px 0px 10px 0px;
            background-color: rgba(255, 255, 255, 0.2);

        }

        .SingleBookshelf {

            display: flex;
            width: 90%;
            margin: 0 auto;
            justify-content: space-between;
            border-bottom: 1px solid white;
            padding: 0px 10px 0px 10px;
            margin-bottom: 10px;

        }

    }

    // TABLET STYLES ⬇︎
    @media screen and ${device.tablet} {

        width: 30%;
        height: 100%;
        margin: 0px;

    }

    // LAPTOP STYLES ⬇︎
    @media screen and ${device.laptop} {

        display: flex;
        flex-direction column;
        align-items: center;
        border: 1px solid white;
        width: 300px;
        color: white;
        height: 100%;

        h2 {

            padding: 10px 0px 10px 0px;
            margin: 0px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.2);

        };

        .SingleBookshelf {

            display: flex;
            justify-content: space-between;
            width: 80%;
            margin: 10px 0px 10px 0px;
            border-bottom: 1px solid white;

            p {

                color: white;

            }

        };

        .SingleBookshelf:hover {

            background-color:rgba(255, 255, 255, 0.2);
            transition: .5s;
            cursor: pointer;

        };

    }

`;

const Activity = styled.div`
  // MOBILE ( Small ) STYLES ⬇︎
  @media screen and ${device.mobileS} {
    width: 90%;
    margin: 0 auto;
    min-height: 60vh;
  }

  // TABLET STYLES ⬇︎
  @media screen and ${device.tablet} {
    width: 60%;
  }

  // LAPTOP STYLES ⬇︎
  @media screen and ${device.laptop} {
    display: flex;
    width: 66%;
    justify-content: center;
    border: 1px solid white;
    min-height: 100vh;
    margin-bottom: 50px;
  }
`;

export default Profile;
