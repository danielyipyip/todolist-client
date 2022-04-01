import React from 'react'
import './styles.css'
import {ListItem, ListItemText, Checkbox} from '@mui/material'

function Todoitem({item}) {
  return (
      <>
      <ListItem>
        <Checkbox></Checkbox>
          <ListItemText>{item.title}</ListItemText>
      </ListItem>
        
      </>
    
  )
}

export default Todoitem