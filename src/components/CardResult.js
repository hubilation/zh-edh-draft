import React, { Component } from "react";
import "./CardResult.css";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import ConfirmCardSelect from "./ConfirmCardSelect";

export default class CardResult extends Component {
  render() {
    var showCardImage = this.props.index === this.props.expandedCardIndex;
    var showConfirmSelect =
      this.props.index === this.props.confirmSelectCardIndex;
    return (
      <div className="card-result">
        <CardHeader
          card={this.props.card}
          showCardImage={showCardImage}
          confirmSelectShowing={showConfirmSelect}
          index={this.props.index}
          handleExpandClick={this.props.handleExpandClick}
          toggleConfirmDisplay={this.props.toggleConfirmDisplay}
        />
        {showConfirmSelect
          ? <ConfirmCardSelect
              card={this.props.card}
              addCardToQueue={this.props.addCardToQueue}
              toggleConfirmDisplay={this.props.toggleConfirmDisplay}
              index={this.props.index}
            />
          : <div />}
        <CardImage
          imageUrl={this.props.card.imageUrl}
          display={showCardImage}
        />
      </div>
    );
  }
}
