import {connect} from 'react-redux';
import CardResult from '../components/CardResult'

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards[ownProps.index],
    showCardImage: state.expandedCardIndex === ownProps.index,
    showConfirmSelect: state.confirmSelectCardIndex === ownProps.index
  };
};

const SearchResult = connect(
    mapStateToProps
)(CardResult)

export default SearchResult