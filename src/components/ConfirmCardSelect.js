import React, { Component } from "react";
import "./ConfirmCardSelect.css";
import MdCheck from "react-icons/lib/md/check";
import MdClose from "react-icons/lib/md/close";

const ConfirmCardSelect = ({
  card,
  index,
  cardSelected,
  addCardToQueue,
  toggleConfirmDisplay
}) =>
  <div className="card-select-confirm">
    {!cardSelected
      ? <div className="card-to-select-confirmation">
          <div className="card-select-confirm-text">
            Add {card.name} to draft queue?
          </div>
          <div className="card-select-ctas">
            <MdCheck
              className="card-select-cta"
              onClick={addCardToQueue}
            />
            <MdClose
              className="card-select-cta"
              onClick={toggleConfirmDisplay}
            />
          </div>
        </div>
      : <div className="card-selected-confirmation">
          <div className="card-select-confirm-text">
            {card.name} added to queue!
          </div>
          <div className="card-select-ctas">
            <MdClose
              className="card-select-cta"
              onClick={toggleConfirmDisplay}
            />
          </div>
        </div>}
  </div>;

export default ConfirmCardSelect;