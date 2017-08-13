import { connect } from "react-redux";
import CardHeader from "../components/CardHeader";
import { toggleCardDetailExpand, toggleDisplayConfirmQueue } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    showCardImage: state.expandedCardIndex === ownProps.index,
    showConfirmSelect: state.confirmSelectCardIndex === ownProps.index
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleExpandClick: () => {
      dispatch(toggleCardDetailExpand(ownProps.index));
    },
    toggleConfirmDisplay: () => {
      dispatch(toggleDisplayConfirmQueue(ownProps.index));
    }
  };
};

const SearchResultHeader = connect(mapStateToProps, mapDispatchToProps)(
  CardHeader
);

export default SearchResultHeader;
