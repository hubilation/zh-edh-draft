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

    this.toggleShowImage = this.toggleShowImage.bind(this);
    this.toggleConfirmDisplay = this.toggleConfirmDisplay.bind(this);
  }

  toggleShowImage() {
    this.props.handleExpandClick(this.props.index);
  }
  toggleConfirmDisplay() {
    this.props.toggleConfirmDisplay(this.props.index);
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
          <div className="card-result-name">
            {this.props.card.name}
          </div>
          <ManaCost manaCost={this.props.card.manaCost} />
        </div>
      </div>
    );
  }
}
