import React, { Component } from "react";
import "./CardResult.css";
import CardImage from "./CardImage";
import CardHeader from "../containers/CardHeader";
import SearchResultConfirmSelect from "../containers/SearchResultConfirmSelect";

const CardResult = ({card, index, showCardImage, showConfirmSelect}) => {
    return (
      <div className="card-result">
        <CardHeader
          card={card}
          index={index}
        />
        {showConfirmSelect
          ? <SearchResultConfirmSelect
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