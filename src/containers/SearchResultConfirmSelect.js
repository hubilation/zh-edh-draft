import { connect } from "react-redux";
import { queueCard, toggleDisplayConfirmQueue } from "../actions";
import ConfirmCardSelect from "../components/ConfirmCardSelect";

const mapStateToProps = (state, ownProps) => {
    return {
        cardSelected: state.selectedCardIndex === ownProps.index
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCardToQueue: () => {
      dispatch(queueCard(ownProps.index));
    },
    toggleConfirmDisplay: () => {
      dispatch(toggleDisplayConfirmQueue(ownProps.index));
    }
  };
};

const SearchResultConfirmSelect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmCardSelect)

export default SearchResultConfirmSelect
