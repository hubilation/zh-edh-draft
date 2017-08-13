import {connect} from 'react-redux';
import CardResults from '../components/CardResults'

const mapStateToProps = state => {
    return {
        cards: state.cards,
        selectedCards: state.selectedCards
    }
}

const SearchResults = connect(
    mapStateToProps
)(CardResults)

export default SearchResults