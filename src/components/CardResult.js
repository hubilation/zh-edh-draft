import React, { Component } from "react";
import "./CardResult.css";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import ConfirmCardSelect from "./ConfirmCardSelect";

const CardResult = (card, index, expandedCardIndex, confirmSelectCardIndex) => {
    var showCardImage = index === expandedCardIndex;
    var showConfirmSelect =
      index === confirmSelectCardIndex;
    return (
      <div className="card-result">
        <CardHeader
          card={card}
          showCardImage={showCardImage}
          confirmSelectShowing={showConfirmSelect}
          index={index}
        />
        {showConfirmSelect
          ? <ConfirmCardSelect
              card={card}
              index={index}
            />
          : <div />}
        <CardImage
          imageUrl={card.image_uri}
          display={showCardImage}
        />
      </div>
    );
  }

  export default CardResult