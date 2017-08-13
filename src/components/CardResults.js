import React from "react";
import SearchResult from "../containers/SearchResult";

const CardResults = ({ cards }) =>
  <div>
    {cards.map((card, index) => {
      return <SearchResult key={card.id} index={index} card={card} />;
    })}
  </div>;

export default CardResults;