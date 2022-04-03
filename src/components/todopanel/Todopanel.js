import React from 'react'
import Todoitem from '../todoitem/Todoitem'
import {Grid, List, Box} from '@mui/material'
import './styles.css'
import NewItem from '../form/NewItem'
import {useSelector} from 'react-redux'

function Todopanel() {
  const items = useSelector(state=>state.item.items)
  console.log(items)
  return (
      <>
      <Grid container justifyContent="center">
        <Box sx={{textAlign: "center", backgroundColor: "#fff176", maxWidth: "500px", minWidth: "300px", minHeight: "300px"}}>
            <List sx={{ }}>
                <div>Todopanel</div>
                {items.length>0 && items.map(item => {
                  return  <Todoitem key={item._id} item={item} />
                })}
                {/* <Todoitem />
                <Todoitem /> */}
                <NewItem />
            </List>
        </Box>
      </Grid>
    </>
  )
}

export default Todopanel