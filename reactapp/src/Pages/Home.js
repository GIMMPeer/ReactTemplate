import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { userActions } from "../actions";


{/* If you have looked at previous projects I am sure you have noticed that the export tends to be below
 the page or component instead of in front of the component like I have it here.  The reason for this is
 because in many of those pages we are combining user actions or redux stores and therefore they all need 
to be combined as one object in the exporter. Example of what that looks like is below.*/}

export class Home extends Component {
    constructor(props) {
        super(props);

        this.testAttempt = this.testAttempt.bind(this);
    }

    testAttempt() {
        userActions.exampleAction(true);
    }

    render() {
        return (<Fragment>
            <div>
            <div>
                <div>
                    <h1 className="fw-bold">GIMM Peer React Template<br /></h1>
                    <br/>
                    <h2 className="text-left">This template is designed to help you start your react projects will as few problems as possible.</h2>
                    <h2 className="text-left">I am currently using a page that is routed to home to display this information!</h2>
                    <br/>
                    <h2 className="text-left">To prep this project for actual use remove pages from folders except for index.js. Remove the references to pages within index.js instead.</h2>

                </div>
                <button onClick={this.testAttempt}>Test Button</button>
               <p>Below is an example of a component within a page. Note this card uses Boot Strap styles to function so research that if you would like to make something similar.</p>
            </div>
            </div>
        </Fragment>);
    }
}

{/* EXPORT WITH MULTIPLE OBJECTS EXAMPLE
function mapState(state) {
    const { session } = state;
    return { session };
}

const actionCreators = {
    signin: userActions.signin
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };*/}