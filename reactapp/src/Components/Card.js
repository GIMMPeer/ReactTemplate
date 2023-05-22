import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Toadlet from '../Images/Toadlet.png';

export class Card extends Component {
    render () {
        return (<Fragment>
            <div class="card card-w">
                <img src={Toadlet} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </Fragment>);
    }
}