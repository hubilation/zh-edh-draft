import React, { Component } from "react";
import "./CardHeader.css";
import ManaCost from "./ManaCost";
import SearchResultHeaderCtas from '../containers/SearchResultHeaderCtas'

const CardHeader = ({
  card,
  headerClass,
  gradientStyle,
  index
}) => {
  return (
    <div>
      <div className="card-header" style={gradientStyle}>
        <SearchResultHeaderCtas index={index} />
        <div className={headerClass}>
          {card.name}
        </div>
        <ManaCost manaCost={card.mana_cost} />
      </div>
    </div>
  );
};

export default CardHeader
