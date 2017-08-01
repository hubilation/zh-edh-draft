import "mana-font/css/mana.min.css";
import "./ManaCost.css";
import React, { Component } from "react";

export default class ManaCost extends Component {
  getIcons(manaCost) {
    if (!manaCost) {
      return;
    }
    var baseClasses = "ms ms-cost ms-shadow";
    var costs = manaCost.match(/\{.*?\}/g);
    var costClasses = costs.map(function(cost) {
      var noBrackets = cost.substring(1, cost.length - 1);
      var isPhyrexian = noBrackets.indexOf("P") > -1;
      var isSplit = !isPhyrexian && noBrackets.indexOf("/") > -1;

      var lower = noBrackets.toLowerCase();
      var noSlashes = lower.replace("/", "");

      var classString = "ms-";

      classString += noSlashes;

      if (isSplit) {
        classString += " ms-split";
      }

      return baseClasses + " " + classString;
    });

    var icons = costClasses.map((costClass, index) =>
      <li key={index} className={costClass} />
    );

    return icons;
  }

  render() {
    var icons = this.getIcons(this.props.manaCost);
    return (
      <ul className="mana-cost">
        {icons}
      </ul>
    );
  }
}
