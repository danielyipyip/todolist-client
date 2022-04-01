import React from 'react'
import './styles.css'
import {ListItem, ListItemText, Checkbox} from '@mui/material'
import {useDispatch} from 'react-redux'
import { ToogleDone } from '../redux';

function Todoitem({item}) {
  const dispatch = useDispatch();
  const handleCheckBox = (id) =>{
    dispatch(ToogleDone(id))
  }
  return (
      <>
      <ListItem>
        <Checkbox checked={item.finished} onChange={()=>handleCheckBox(item._id)}></Checkbox>
          <ListItemText>{item.title}</ListItemText>
      </ListItem>
        
      </>
    
  )
}

export default Todoitem