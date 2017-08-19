import React from "react";
import { connect } from "react-redux";
import GradientStyler from "../utilities/GradientStyler";
import "../components/CardHeader.css";
import ManaCost from "../components/ManaCost";
import SearchResultHeaderCtas from '../containers/SearchResultHeaderCtas'

const jsx = ({
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


const mapStateToProps = (state, ownProps) => {
  return {
    gradientStyle: GradientStyler.getGradientStyleReversed(ownProps.card.colors),
    headerClass: getHeaderClass(ownProps.card),
    showCardImage: state.expandedCardIndex === ownProps.index,
    showConfirmSelect: state.confirmSelectCardIndex === ownProps.index
  };
};

function getHeaderClass(card){
    var activeClasses = [];
    activeClasses.push("card-result-name");

    var isOwned = card.ownedBy;
    if (isOwned) activeClasses.push("taken");

    return activeClasses.join(" ");
}

const CardHeader = connect(mapStateToProps)(jsx);

export default CardHeader;
