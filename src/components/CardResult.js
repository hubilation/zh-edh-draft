import React, { Component } from 'react';
import './CardResult.css';
import 'mana-font/css/mana.min.css';


export default class CardResult extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.setColorIdentityClass(props.card.colors);
        this.setIconClass(props.card.manaCost);
    };

    setColorIdentityClass(colors){
        var loweredColors = colors.map(function(color){
            return color.toLowerCase();
        });
        this.state.colorIdentityClass = 'card-result-' + loweredColors.join('-')
    };

    setIconClass(manaCost) {
        var baseClasses = "ms ms-cost ms-shadow";
        var costs = manaCost.match(/\{.*?\}/g);
        var costsFormatted = costs.map(function(cost){
            debugger;
            var noBrackets = cost.substring(1, cost.length-1);
            var isPhyrexian = noBrackets.indexOf('P') > -1;
            var isSplit = !isPhyrexian && noBrackets.indexOf('\/') > -1;

            var lower = noBrackets.toLowerCase();
            var noSlashes = ""; //todo remove slashes
            
            var classString = "ms-";
            
            

            return 
        });


        debugger;
    }

    render () {
        return (
            <div className={'card-result ' + this.state.colorIdentityClass}>
                <div className="card-result-name">
                    {this.props.card.name}
                </div>
                <ul className="mana-symbols">

                </ul>
            </div>
        )
    }
}