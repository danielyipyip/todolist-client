import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {inputItem, CreateItem, resetInput} from '../redux/index'
import {TextField, Button} from '@mui/material'

function NewItem() {
    const newItem = useSelector(state=>state.item.current_item)
    const dispatch = useDispatch();
    const handleInput = (evt) =>{
        const curr_item = {...newItem, title:evt.target.value}
        dispatch(inputItem(curr_item))
    }
    const handleSubmit = (evt) =>{
        evt.preventDefault()
        dispatch(CreateItem(newItem))
        clear()
    }
    const clear = () =>{dispatch(resetInput())}
  return (
    <div>
        <form onSubmit={evt => handleSubmit(evt)}>
            <TextField label='New item' variant='standard' onChange={(evt)=>handleInput(evt)} value={newItem.title} required 
                InputProps={{endAdornment: <Button variant='contained' color='primary' type='submit'>Add</Button>}}
            />
        </form>
    </div>
  )
}

export default NewItem