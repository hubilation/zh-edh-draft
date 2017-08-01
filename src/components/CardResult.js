import React, { Component } from 'react';
import './CardResult.css';
import ManaCost from './ManaCost'


export default class CardResult extends Component {
    getColorIdentityClass(colors){
        if(!colors){
            return;
        }
        var loweredColors = colors.map(function(color){
            return color.toLowerCase();
        });
        return 'card-result-' + loweredColors.join('-')
    };

    render () {
        var colorIdentityClass = this.getColorIdentityClass(this.props.card.colors);

        return (
            <div className={'card-result ' + colorIdentityClass}>
                <div className="card-result-name">
                    {this.props.card.name}
                </div>
                <ManaCost manaCost={this.props.card.manaCost} />
            </div>
        )
    }
}