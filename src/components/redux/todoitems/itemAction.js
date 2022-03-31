import * as itemTypes from './itemType'
import * as api from '../../api/itemapi'

export const getItems = (items) =>{
    return {type: itemTypes.GET_ITEMS, payload: items}
}

export const loading = () =>{
    return {type: itemTypes.LOADING}
}

export const error = (err) =>{
    return {type: itemTypes.ERROR, payload: err}
}

export const GetItems = () =>{
    return (dispatch) =>{
        dispatch(loading())
        api.getPostAPI()
        .then( (data)=>dispatch(getItems(data.data)) )
        .catch( (err)=>dispatch(error(err)) )
    }
}

export const inputItem = (text) =>{
    return {type: itemTypes.INPUT_ITEM, payload: text}
}