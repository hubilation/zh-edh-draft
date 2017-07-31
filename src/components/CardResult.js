import React, { Component } from 'react';
import './CardResult.css';
import ManaCost from './ManaCost'


export default class CardResult extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.setColorIdentityClass(props.card.colors);
    };

    setColorIdentityClass(colors){
        if(!colors){
            return;
        }
        var loweredColors = colors.map(function(color){
            return color.toLowerCase();
        });
        this.state.colorIdentityClass = 'card-result-' + loweredColors.join('-')
    };

    

    render () {
        return (
            <div className={'card-result ' + this.state.colorIdentityClass}>
                <div className="card-result-name">
                    {this.props.card.name}
                </div>
                <ManaCost manaCost={this.props.card.manaCost} />
            </div>
        )
    }
}