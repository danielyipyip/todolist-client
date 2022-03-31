import itemReducer from './todoitems/itemReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    item: itemReducer
})

export default rootReducer