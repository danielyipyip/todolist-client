import React from 'react'
import './styles.css'
import {ListItem, ListItemText, Checkbox, IconButton } from '@mui/material'
import {useDispatch} from 'react-redux'
import { DeleteItem, ToogleDone } from '../redux';
import {Delete} from '@mui/icons-material';

function Todoitem({item}) {
  const dispatch = useDispatch();
  const handleCheckBox = (id) =>{
    dispatch(ToogleDone(id))
  }
  const handleDelete = (id) =>{
    dispatch(DeleteItem(id))
  }
  return (
      <>
      <ListItem>
        <Checkbox checked={item.finished} onClick={()=>handleCheckBox(item._id)}></Checkbox>
          <ListItemText className={item.finished?'checked':''} >{item.title}</ListItemText>
          <IconButton onClick={()=>handleDelete(item._id)}><Delete /></IconButton>
      </ListItem>
        
      </>
    
  )
}

export default Todoitem