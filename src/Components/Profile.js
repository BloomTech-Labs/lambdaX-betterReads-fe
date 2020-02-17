import React, { useEffect, useState } from "react";
import styled from "styled-components";

// THIS SHOULD BE REPLACED WITH THE USERS INFO FROM STATE ONCE WE GET THE GOOGLE INFO / LOGIN WORKING
const user = {

    firstName: 'Alan',
    lastName: 'Watts',
    backgroundImage: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    profileImage: 'https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2014/01/alanwatts.jpg?w=680&ssl=1',
    location: 'Austin',
    following: 1,
    followers: 279

}

const Profile = props => {

    return(

        <ProfileContainer>

            <BackgroundImageContainer>
                <BackgroundImage src = {user.backgroundImage}/>
            </BackgroundImageContainer>

            <div className = 'Section Profile'>
                <img className = 'ProfilePicture' src = { user.profileImage }/>
            </div>

            <UserInfoContainer>


                <div className = 'Section User'>

                    <h1 className = 'Name'>{ user.firstName } { user.lastName }</h1>
                    <p className = 'Location'>{ user.location }</p>

                </div>

                <div className = 'Section Social'>

                    <div>
                        <h1>{ user.followers }</h1>
                        <p>Followers</p>
                    </div>

                    <div>
                        <h1>{ user.following }</h1>
                        <p>Following</p>
                    </div>

                </div>

                <div className = 'Section Buttons'>

                    <button className = 'Follow'>Follow</button>
                    <button className = 'Message'>Message</button>

                </div>

                <div className = 'Section'>
    
                </div>

            </UserInfoContainer>

        </ProfileContainer>

    )

};

const ProfileContainer = styled.div`

    // background: linear-gradient( rgb( 23 , 35 , 43 ) , rgb( 58 , 95 , 114 ) );
    min-height: 90vh;
    max-width: 1500px;
    margin: 0 auto;

    h1 {
        margin: 5px;
    }

    p {
        margin: 10px;
        color: rgb( 171, 171, 171 );
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

`;

const BackgroundImageContainer = styled.div`

    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const BackgroundImage = styled.img`

    width: 100%;
    height: auto;

`;

const UserInfoContainer = styled.div`

    display: flex;
    margin: 0 auto;
    margin-left: 300px;
    justify-content: space-between;

    .Section {

        color: white;

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
        transition: .5s;

        button {

            font-size: 25px;
            height: 50px;
            min-width: 150px;
            border-radius: 10px;
            border: 1px solid rgb(105,121,248);

        }

        button.Follow {
            background-color: rgb(105,121,248);
        }

        button.Message {
            // border: 1px solid rgb(105,121,248);
        }

        button:hover {
            cursor: pointer;
            border: 1px solid rgb(33,33,33);
            transition: .5s;
        }
    }

`;

export default Profile;
