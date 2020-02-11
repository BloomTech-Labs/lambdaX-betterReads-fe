import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Router
import { BrowserRouter as Router , withRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');
const AppWithRouter = withRouter( App )

ReactDOM.render(

    <Router>
        <AppWithRouter />
    </Router>

, rootElement );


