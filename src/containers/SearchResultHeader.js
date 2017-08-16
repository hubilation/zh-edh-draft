import { connect } from "react-redux";
import CardHeader from "../components/CardHeader";
import { toggleCardDetailExpand, toggleDisplayConfirmQueue } from "../actions";
import GradientStyler from "../utilities/GradientStyler";


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

const SearchResultHeader = connect(mapStateToProps)(
  CardHeader
);

export default SearchResultHeader;
