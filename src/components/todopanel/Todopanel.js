import React from 'react'
import Todoitem from '../todoitem/Todoitem'
import {Grid, List, Box, Typography} from '@mui/material'
import './styles.css'
import NewItem from '../form/NewItem'
import {useSelector} from 'react-redux'

function Todopanel() {
  const items = useSelector(state=>state.item.items)
  console.log(items)
  return (
      <>
      <Grid container justifyContent="center">
        <Box sx={{textAlign: "center", backgroundColor: "rgba(255,241,118, 0.7)", maxWidth: "600px", minWidth: "350px", minHeight: "300px", margin:'5%' }}>
            <List sx={{ }}>
              <Typography variant='h4'>To Do List</Typography>
                {items.length>0 && items.map(item => {
                  return  <Todoitem key={item._id} item={item} />
                })}
                <NewItem />
            </List>
        </Box>
      </Grid>
    </>
  )
}

export default Todopanel