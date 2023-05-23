import React, { Component, Fragment } from 'react';
import { Navigate } from 'react-router';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';


//IMPORTING PAGES EXAMPLE
import {Home, Color} from '../Pages';

//IMPORTING COMPONENTS EXAMPLE
import {Card} from '../Components';


class App extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (<Fragment>
        <center>
          <BrowserRouter>
          {/*USING REACT ROUTER YOU CAN CREATE EASY TO USE URLS FOR PAGES*/}
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/Color' element={<Color />} />
            </Routes>
          </BrowserRouter>
          {/* HOW TO DECLARE A COMPONENT
            Components get declared as if they are tags and information can be passed through them like was shown in the freecodecamp tutorials.
            The Card Tag below is a component!
            */}
          <Card/>

        </center>
      </Fragment>);
    }
  }
  
  export default App;