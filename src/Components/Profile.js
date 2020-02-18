import React, { useEffect, useState } from "react";
import styled from "styled-components";

// THIS SHOULD BE REPLACED WITH THE USERS INFO FROM STATE ONCE WE GET THE GOOGLE INFO / LOGIN WORKING
// Simulates the info we will have once collecting data from our database:

// note "Batteries Included": 
//      I followed the database diagram to be accurate without using the database: https://dbdiagram.io/d/5e28d3619e76504e0ef08ed5
//      Styled using the wireframe: https://www.figma.com/file/LN9bPENjN2JU8NNRWjfsE5/Better-Reads?node-id=0%3A1


// PROPOSAL: Could we store the isbn number of the book in the "bookshelf_book" table to reduce a layer of abstaction?
// also making the books an array with all of them to get the length for the profile bookshelf page

// We could go from this:

// ...
// user_bookshelves: [

//     {
//         id: 1, // Primary Key
//         shelf_name: 'Plilosophy',
//         user_id: 1,
//         user_type: 'Creator',

//         bookshelf_book: {
//             id: 1,
//             book_id: 1,
//             bookshelf_id: 1,

//             book: {
//                 id: 1,
//                 isbn: 1253
//             }
//         },

//         bookshelf_book: {
//             id: 2,
//             book_id: 2,
//             bookshelf_id: 1,

//             book: {
//                 id: 2,
//                 isbn: 8723
//             }
//         }
//     }
// ]

// ------------------------------------------------------

// To This:

// ...
// const user_bookshelves = [

//     {
//         id: 1, // Primary Key
//         shelf_name: 'Plilosophy',
//         user_id: 1,
//         user_type: 'Creator',

//         bookshelf_book: [

//             {
//                 id: 1,
//                 book_id: 1,
//                 bookshelf_id: 1,
//                 isbn: 1253
//             },
//             {
//                 id: 2,
//                 book_id: 2,
//                 bookshelf_id: 1,
//                 isbn: 8723
//             }
//         ],
//     }
// ]

// --------------
// METHD: Get    |
// Table: Users  |
// --------------

const user = {

    id: 1, // Primary Key
    username: 'AWatts',
    email: 'AlanWatts@gmail.com',
    password: 'PhilosophyIsCool100',
    location: 'Austin',
    bio: '',
    image: 'https://i0.wp.com/www.brainpickings.org/wp-content/uploads/2014/01/alanwatts.jpg?w=680&ssl=1',
    banner_image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

    // Extras we could add to the database?
    firstName: 'Alan',
    lastName: 'Watts',
    following: 1,
    followers: 279,

    // All the users bokshelves they have created ⬇︎
    user_bookshelves: [

        // ORIGINAL
        // {

        //     id: 1, // Primary Key
        //     shelf_name: 'Plilosophy',
        //     user_id: 1,
        //     user_type: 'Creator', // Idea💡: we could use the values Creator / Author or Viewer / Reader ( for editing privileges )

        //     // Books Inside the bookshelf ⬇︎
        //     bookshelf_book: {

        //         id: 1, // Primary Key
        //         book_id: 1,
        //         bookshelf_id: 1,

        //         book: {

        //             id: 1, // Primary Key
        //             isbn: 1253

        //         }

        //     },

        //     bookshelf_book: {

        //         id: 2, // Primary Key
        //         book_id: 2,
        //         bookshelf_id: 1,

        //         book: {

        //             id: 2, // Primary Key
        //             isbn: 8723

        //         }

        //     }
        // },

        // {
            
        //     id: 2, // Primary Key
        //     shelf_name: 'Fun',
        //     user_id: 1,
        //     user_type: 'Creator', // Idea💡: we could use the values Creator / Author or Viewer / Reader ( for editing privileges )

        //     bookshelf_book: {

        //         id: 1, // Primary Key
        //         book_id: 1,
        //         bookshelf_id: 2,

        //         book: {

        //             id: 1, // Primary Key
        //             isbn: 6301

        //         }

        //     },

        //     bookshelf_book: {

        //         id: 2, // Primary Key
        //         book_id: 2,
        //         bookshelf_id: 2,

        //         book: {

        //             id: 2, // Primary Key
        //             isbn: 1287

        //         }

        //     }
        // }

        // TESTING

        {
            id: 1, // Primary Key
            shelf_name: 'Plilosophy',
            user_id: 1,
            user_type: 'Creator',

            bookshelf_books: [

                {
                    id: 1,
                    book_id: 1,
                    bookshelf_id: 1,
                    isbn: 1253
                }
            ],
        },

        {
            id: 2, // Primary Key
            shelf_name: 'Fun',
            user_id: 1,
            user_type: 'Creator',

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
            ],
        }


    
    ]

}

const Profile = props => {

    return(

        <ProfileContainer>

            <BackgroundImageContainer>

                <BackgroundImage src = { user.banner_image }/>

            </BackgroundImageContainer>

            <div className = 'Section Profile'>

                <img className = 'ProfilePicture' src = { user.image }/>

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

            </UserInfoContainer>


            <BookshelvesAndActivityContainer>
            
                <Bookshelves>

                    <h2>{ user.firstName }'s Bookshelves</h2>
                    { user.user_bookshelves.map( book =>

                        <div className = 'SingleBookshelf'>
                            <p>{ book.shelf_name }</p>
                            <p>{ book.bookshelf_books.length }</p>
                        </div>

                    )}

                </Bookshelves>

                <Activity>

                    <h1>Activity</h1>

                </Activity>
            
            </BookshelvesAndActivityContainer>

        </ProfileContainer>

    )

};

const ProfileContainer = styled.div`

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

    width: auto;
    height: auto;
    min-height: 400px;

`;

const UserInfoContainer = styled.div`

    display: flex;
    margin: 0 auto;
    margin-left: 300px;
    justify-content: space-between;
    margin-bottom: 50px;

    .Section {

        color: white;

    }

    .Section.User {

        width: 200px;

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


const BookshelvesAndActivityContainer = styled.div`

    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;

`;

const Bookshelves = styled.div`

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

`;

const Activity = styled.div`

    display: flex;
    width: 66%;
    justify-content: center;
    border: 1px solid white;
    min-height: 100vh;
    margin-bottom: 50px;

`;

export default Profile;
