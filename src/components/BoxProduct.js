import React, { useEffect, useState,useRef } from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Rating, Typography } from "@mui/material"

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useTheme } from "@emotion/react";
import { motion, useInView } from "framer-motion"



function BoxProduct({elem}){

    const theme = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        console.log(isInView)
    },[isInView])

    return(
        <motion.div ref={ref}
                    initial={{y:'100%', opacity:0}} 
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{duration:0.5}}
                    >
                    <Card elevation={10}>
                        <CardMedia
                        component="img"
                        alt={elem.name}

                        image={`./img/test${elem.id}.png`}
                        />
                        <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>

                                <Typography variant='h3'>{elem.name}</Typography>
                                <Typography variant='subtitle'>Prix : {elem.price} euros</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                                <Rating defaultValue={elem.rating} precision={0.5} readOnly />
                                <Typography variant='subtitle'>({elem.avis} : Avis)</Typography>

                            </Grid>
                        </Grid>
                        </CardContent>
                            
                            
                        <CardActions sx={{pr:2,pl:2}}>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Button variant="contained" sx={{width:'100%'}}>
                                    <ShoppingBasketOutlinedIcon sx={{fontSize:'20', mr:1, ml:1}}/>
                                    <Typography variant="body1" fontSize={14}>Acheter</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div style={{display:'flex',justifyContent:'center',alignContent:'baseline'}}>
                                    <IconButton onClick={()=>setQuantity(p => p+1)}><AddOutlinedIcon/></IconButton>
                                    <Typography variant="body1" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>{quantity}</Typography>
                                    <IconButton onClick={()=>setQuantity(p => p-1 > 0 ? p-1 : 0)}><RemoveOutlinedIcon/></IconButton>
                                </div>
                                
                            </Grid>
                        </Grid>
                        
                        </CardActions>
                    </Card>
                    </motion.div>
    )
}export default BoxProduct