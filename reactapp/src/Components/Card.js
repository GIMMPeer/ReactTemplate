import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Toadlet from '../Images/Toadlet.png';

export class Card extends Component {
    render () {
        return (<Fragment>
            <div class="card card-w">
                <img src={Toadlet} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Pumpkin Toadlet</h5>
                    <p class="card-text">“They’re not great jumpers, and they’re not particularly good walkers either. They sort of stomp around in a stilted, 
                    peg-like version of walking,” - Edward Stanley </p>
                    <a href="#" class="btn btn-primary">Beautiful</a>
                </div>
            </div>
        </Fragment>);
    }
}