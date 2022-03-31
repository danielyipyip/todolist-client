import React, {useEffect} from "react";
import Todopanel from "./components/todopanel/Todopanel";
import {useSelector, useDispatch} from 'react-redux'
import {GetItems} from './components/redux/index'

const App = () =>{
    const items = useSelector(state=>state.item.items);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetItems())
    }, [])
    return (
        <div>
            <p>App</p>
            {items && items[0].title}
            <Todopanel />
        </div>
        
    )
}

export default App