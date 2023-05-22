import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Fragment>
            <div>
            <div>
                <div>
                    <h1 className="fw-bold">GIMM Peer React Template<br /></h1>
                    <br/>
                    <h2 className="text-left">This template is designed to help you start your react projects will as few problems as possible.</h2>
                </div>
               <p>Below is an example of a component within a page</p>
            </div>
            </div>
        </Fragment>);
    }
}