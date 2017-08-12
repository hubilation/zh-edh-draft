import React, { Component } from "react";
import "./CardHeader.css";
import ManaCost from "./ManaCost";
import GradientStyler from "../utilities/GradientStyler";
import MdAdd from "react-icons/lib/md/add";
import MdExpandLess from "react-icons/lib/md/expand-less";
import MdExpandMore from "react-icons/lib/md/expand-more";
import MdClose from "react-icons/lib/md/close";

export default class CardHeader extends Component {
  constructor(props) {
    super(props);

    this.getHeaderClass = this.getHeaderClass.bind(this);
  }

  getHeaderClass(card) {
    var activeClasses = [];

    activeClasses.push("card-result-name");

    var isOwned = card.ownedBy;

    if (isOwned) activeClasses.push("taken");

    return activeClasses.join(" ");
  }
  render() {
    var style = GradientStyler.getGradientStyleReversed(this.props.card.colors);
    return (
      <div>
        <div className="card-header" style={style}>
          <div className="card-ctas">
            {this.props.showCardImage
              ? <MdExpandMore
                  onClick={this.toggleShowImage}
                  className="card-cta"
                />
              : <MdExpandLess
                  onClick={this.toggleShowImage}
                  className="card-cta"
                />}
            {this.props.confirmSelectShowing
              ? <MdClose
                  className="card-cta"
                  onClick={this.toggleConfirmDisplay}
                />
              : <MdAdd
                  className="card-cta"
                  onClick={this.toggleConfirmDisplay}
                />}
          </div>
          <div
            className={this.getHeaderClass(this.props.card)}
          >
            {this.props.card.name}
          </div>
          <ManaCost manaCost={this.props.card.mana_cost} />
        </div>
      </div>
    );
  }
}
