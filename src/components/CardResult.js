import React, { Component } from "react";
import "./CardResult.css";
import ManaCost from "./ManaCost";
import GradientStyler from "../utilities/GradientStyler";
import CardImage from "./CardImage";
import MdAdd from "react-icons/lib/md/add";
import MdExpandLess from "react-icons/lib/md/expand-less";
import MdExpandMore from "react-icons/lib/md/expand-more";

export default class CardResult extends Component {
  render() {
    var style = GradientStyler.getGradientStyleReversed(this.props.card.colors);
    var showCardImage = this.props.index === this.props.expandedCardIndex;

    return (
      <div className="card-result">
        <div className="card-header"  style={style}>
          <div className="card-ctas">
            {showCardImage ? <MdExpandMore onClick={()=>this.props.handleExpandClick(this.props.index)} /> 
              : <MdExpandLess onClick={()=>this.props.handleExpandClick(this.props.index)}/>}
                <MdAdd />
          </div>
          <div className="card-result-name">
            {this.props.card.name}
          </div>
          <ManaCost manaCost={this.props.card.manaCost} />
        </div>
        <CardImage imageUrl={this.props.card.imageUrl} display={showCardImage} />
      </div>
    );
  }
}
