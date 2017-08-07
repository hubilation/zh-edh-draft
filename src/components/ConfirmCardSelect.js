import React, { Component } from "react";
import "./ConfirmCardSelect.css";
import MdCheck from "react-icons/lib/md/check";
import MdClose from "react-icons/lib/md/close";

export default class ConfirmCardSelect extends Component {
  constructor(props) {
    super(props);
    this.confirmSelection = this.confirmSelection.bind(this);
    this.cancelSelection = this.cancelSelection.bind(this);

    this.state = {
      cardSelected: false
    };
  }
  confirmSelection() {
    this.props.addCardToQueue(this.props.index);
    this.setState({ cardSelected: true });
  }
  cancelSelection() {
    this.props.toggleConfirmDisplay(this.props.index);
  }

  render() {
    return (
      <div className="card-select-confirm">
        {!this.state.cardSelected
          ? <div className="card-to-select-confirmation">
              <div className="card-select-confirm-text">
                Add {this.props.card.name} to draft queue?
              </div>
              <div className="card-select-ctas">
                <MdCheck
                  className="card-select-cta"
                  onClick={this.confirmSelection}
                />
                <MdClose
                  className="card-select-cta"
                  onClick={this.cancelSelection}
                />
              </div>
            </div>
          : <div className="card-selected-confirmation">
              <div className="card-select-confirm-text">
                {this.props.card.name} added to queue!
              </div>
              <div className="card-select-ctas">
                <MdClose
                  className="card-select-cta"
                  onClick={this.cancelSelection}
                />
              </div>
            </div>}
      </div>
    );
  }
}
