import React, { Component } from "react";
import "./CardResult.css";
import ManaCost from "./ManaCost";
import styles from "./variables.scss";
import Constants from "./constants";

export default class CardResult extends Component {
  getColorIdentityClass(colors) {
    if (!colors) {
      return;
    }
    var loweredColors = colors.map(function(color) {
      return color.toLowerCase();
    });
    return "card-result-" + loweredColors.join("-");
  }

  getGradientStyle(colors) {
    var gradient = "linear-gradient(to right, ";

    if (!colors) {
      gradient += "#D7D1D0";
    } else {
      var hexCodes = colors.map(function(color) {
        var loweredColor = color.toLowerCase();
        return Constants.Colors[loweredColor];
      });

      for (var i = 0; i < hexCodes.length; i++) {
        var code = hexCodes[i];

        gradient += code;

        if (i < hexCodes.length - 1) {
          gradient += ", ";
        }
      }
    }

    if (!colors || colors.length < 2) {
      gradient += ", white)";
    } else {
      gradient += ")";
    }
    return {
      background: gradient
    };
  }

  getGradientStyleReversed(colors) {
    var gradient = "linear-gradient(to right, ";

    if (!colors || colors.length < 2) {
        gradient += "white, ";
    }

    if (!colors) gradient += "#D7D1D0";
else{
      var hexCodes = colors.map(function(color) {
        var loweredColor = color.toLowerCase();
        return Constants.Colors[loweredColor];
      });

      for (var i = 0; i < hexCodes.length; i++) {
        var code = hexCodes[i];

        gradient += code;

        if (i < hexCodes.length - 1) {
            gradient += ", ";
            }
      }
}


    gradient += ")";

    console.log(gradient);
    return {
      background: gradient
    };
  }

  render() {
    var colorIdentityClass = this.getColorIdentityClass(this.props.card.colors);
    var style = this.getGradientStyleReversed(this.props.card.colors);
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
