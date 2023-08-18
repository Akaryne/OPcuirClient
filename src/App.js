import React, { Fragment } from 'react'
import ProductPage from './components/ProductPage'
import BackgroundAcceuil from './components/BackgroundAcceuil'
import {AppBar, Container, Icon, IconButton, Typography} from "@mui/material"


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function App(){


  return(
    <Fragment style={{display:'flex'}}>
      <AppBar sx={{height:'8vh'}}>
        <Container maxWidth='100vw'
        sx={{height:'100%',p:0,m:0,display:'flex', alignItems: 'center'}}>
          <Typography variant='h2'
          sx={{textAlign:'center',marginLeft:2}}>OP CUIR</Typography>
          <IconButton sx={{ marginLeft: 'auto' }}>
            <ShoppingCartIcon sx={{fontSize:"40px",color:'black'}}></ShoppingCartIcon>
          </IconButton>
        </Container>
      </AppBar>
      <BackgroundAcceuil/>
      <ProductPage />
    </Fragment>
  )
}export default App
