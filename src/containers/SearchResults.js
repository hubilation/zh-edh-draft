import {connect} from 'react-redux';
import CardResults from '../components/CardResults'

const mapStateToProps = state => {
    debugger;
    return {
        cards: state.searchResults.cards,
        selectedCards: state.selectedCards
    }
}

const SearchResults = connect(
    mapStateToProps
)(CardResults)

export default SearchResults