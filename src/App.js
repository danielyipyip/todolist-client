import React, {useEffect} from "react";
import Todopanel from "./components/todopanel/Todopanel";
import {useSelector, useDispatch} from 'react-redux'
import {GetItems} from './components/redux/index'

const App = () =>{
    const items = useSelector(state=>state.item.items);
    // console.log(items)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetItems())
    }, [])
    return (
        <div>
            <p>App</p>
            {/* {items.length>0? items.map(item=><p>{item.title}</p>): 'loading'} */}
            <Todopanel items={items}/>
        </div>
        
    )
}

export default App