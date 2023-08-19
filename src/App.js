import React, { useState, Fragment } from 'react'
import ProductPage from './components/ProductPage'
import BackgroundAcceuil from './components/BackgroundAcceuil'
import {AppBar, Container, Icon, IconButton, Tab, Tabs, Typography} from "@mui/material"
import { useTheme } from "@emotion/react";


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {motion} from 'framer-motion'



function App(){

  const theme = useTheme()

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
    console.log(newValue)
  };


  return(
    <Fragment>
      <AppBar sx={{height:'8vh', background: `linear-gradient(0deg, rgba(255,255,255,1) 10%, ${theme.palette.primary.main} 300%)`}}>
        <Container maxWidth='100vw'
        sx={{height:'100%',p:0,m:0,display:'flex', alignItems: 'center'}}>
          <Typography variant='h2' fontSize={30} fontWeight={800}
          sx={{textAlign:'center',marginLeft:2}}>OP CREATION</Typography>

        <Tabs value={currentTab} onChange={handleTabChange} sx={{ marginLeft: 'auto' }}>
          <Tab label={<motion.div><Typography variant='h3'>CUIR</Typography></motion.div>}></Tab>
          <Tab label={<motion.div><Typography variant='h3'>BOIS</Typography></motion.div>}></Tab>
          <Tab label={<motion.div><Typography variant='h3'>ACRYLIQUE</Typography></motion.div>}></Tab>
        </Tabs>


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
