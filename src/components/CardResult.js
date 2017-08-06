import React, { Component } from "react";
import "./CardResult.css";
import ManaCost from "./ManaCost";
import GradientStyler from "../utilities/GradientStyler";

export default class CardResult extends Component {
  render() {
    var style = GradientStyler.getGradientStyleReversed(this.props.card.colors);
    
    return (
      <div className="card-result" style={style}>
        <div className="card-header">
          <div className="card-result-name">
            {this.props.card.name}
          </div>
          <ManaCost manaCost={this.props.card.manaCost} />
        </div>
      </div>
    );
  }
}
