import { Container, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from "@emotion/react";
import { alpha } from "@mui/material";
import { motion } from "framer-motion"

function BackgroundAcceuil(){
    const theme = useTheme()


    return(
        <Container maxWidth='100vw' sx={{background:alpha(theme.palette.primary.main,0.3)}} style={{ padding: 0, margin: 0, position: 'relative', height: '90vh' }}>
        <img src={'./img/Acceuil.png'} width='100%' height='90%' style={{ position: 'relative', objectFit: 'cover' }}></img>
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }} // Ajoutez la durée souhaitée pour l'animation
          style={{
            position: 'absolute',
            top: '25%',
            left: 0,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            width: '100%',
            background:'#ffffff5e'
          }}
        >
          <Typography variant='h1' fontSize={100} sx={{textShadow:'grey 0px 0px 10px'}}>
            OP cuir
          </Typography>
          <Typography variant='subtitle' fontSize={50} style={{ marginTop: '0.5rem' }} sx={{textShadow:'grey 0px 0px 10px'}}>
            Artiste et créateur
          </Typography>
        </motion.div>
      </Container>
    )
}export default BackgroundAcceuil