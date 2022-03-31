import React from 'react'
import Todoitem from '../todoitem/Todoitem'
import {Grid, List, Box} from '@mui/material'
import './styles.css'
import NewItem from '../form/NewItem'

function Todopanel() {
  return (
      <>
      <Grid container justifyContent="center">
        <Box sx={{textAlign: "center", backgroundColor: "#fff176", maxWidth: "500px", minWidth: "300px", minHeight: "300px"}}>
            <List sx={{ }}>
                <div>Todopanel</div>
                
                <Todoitem />
                <Todoitem />
                <NewItem />
            </List>
        </Box>
      </Grid>
    </>
  )
}

export default Todopanel