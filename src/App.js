import React from 'react';
import './App.css';
import { Route , NavLink } from 'react-router-dom';

// Componentss
import HomePage from './Components/Homepage';

function App() {

  return (

    <div className="App">

      <div className = 'Routes'>

        <NavLink exact to = '/'>Home</NavLink>
        <NavLink exact to = '/'>Profile</NavLink>
        <NavLink exact to = '/'>Bookshelves </NavLink>
        <NavLink exact to = '/'>Discover</NavLink>

      </div>

      {/* Routes with attatched components */}
      <Route exact path = '/' component = { HomePage } />

    </div>

  );

}

export default App;
