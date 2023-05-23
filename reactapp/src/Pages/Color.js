import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

export class Color extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Fragment>
            <div>
            <div>
                <div>
                    <h1 className="fw-bold">BSU DIGITAL COLOR LIBRARY<br /></h1>
                    <br/>
                    <p className="text-left">When working on a project meant for a Boise State project you are expected to use BSU colors. 
                    This project has all the colors availbile as well as instructions on how to make variables and call those colors.</p>
                </div>
                <div>
                    
                </div>
            </div>
            </div>
        </Fragment>);
    }
}