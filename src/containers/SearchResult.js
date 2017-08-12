import {connect} from 'react-redux';
import CardResult from '../components/CardResult'

const mapStateToProps = state => {
    return {
        expandedCardIndex: state.expandedCardIndex,
        confirmSelectCardIndex: state.confirmSelectCardIndex
    }
}

const SearchResult = connect(
    mapStateToProps
)(CardResult)

export default SearchResult