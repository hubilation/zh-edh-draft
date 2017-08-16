import { connect } from "react-redux";
import CardResultCtas from "../components/CardResultCtas";
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

const SearchResultHeaderCtas = connect(mapStateToProps, mapDispatchToProps)(CardResultCtas)

export default SearchResultHeaderCtas