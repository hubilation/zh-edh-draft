import {connect} from 'react-redux';
import CardHeader from '../components/CardHeader';
import {toggleCardDetailExpand, toggleDisplayConfirmQueue} from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleExpandClick: ()=>{
            dispatch(toggleCardDetailExpand(ownProps.index))
        },
        toggleConfirmDisplay: ()=>{
            dispatch(toggleDisplayConfirmQueue(ownProps.index))
        }
    }
}

const SearchResultHeader = connect(
    mapDispatchToProps
)(CardHeader)

export default SearchResultHeader
