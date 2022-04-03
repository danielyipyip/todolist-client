import * as itemTypes from './itemType'
import {getItems} from './itemAction'

const initialState = {
    loading: false, 
    items: [], 
    current_item: {title: '', finished: false, created: '' }, 
    create: false, 
    error: ''
}

const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case itemTypes.LOADING:
            return {...state, loading: true}
        case itemTypes.GET_ITEMS:
            return {...state, loading: false, items: action.payload, error: ''}
        case itemTypes.ERROR: 
            return {...state, loading: false, error: action.payload, create: false}
        case itemTypes.INPUT_ITEM:
            return {...state, loading: false, current_item:action.payload}
        case itemTypes.CREATE_ITEM:
            return {...state, loading: false, current_item:initialState.current_item, items: [...state.items, action.payload], create:true}
        case itemTypes.CREATING: 
            return {...state, create: false}
        case itemTypes.RESET_INPUT: 
            return {...state, current_item:initialState.current_item}
        case itemTypes.TOGGLE_DONE:
            return {...state, items:state.items.length>0?state.items.map(item=>{
                return {...item, _id:item._id==action.id?(!item.finished):item.finished} })
                :state.items }
        case itemTypes.DELETE_ITEM:
            return {...state, items: state.items.filter(item=>item._id!=action.id)}
        default:
            return state
    }
}

export default reducer;