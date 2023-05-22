import React, { Component, Fragment } from 'react';
import { Navigate } from 'react-router';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

//IMPORTING PAGES EXAMPLE
import {Home, Example} from '../Pages';

//IMPORTING COMPONENTS EXAMPLE

class App extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (<Fragment>
        <center>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/example' element={<Example />} />
            </Routes>
          </BrowserRouter>
        </center>
      </Fragment>);
    }
  }
  
  export default App;