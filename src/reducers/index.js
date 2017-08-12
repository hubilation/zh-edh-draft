import {combineReducers} from 'redux'
import searchResults from './searchResults'

const draftApp = combineReducers({
    searchResults
});

export default draftApp;