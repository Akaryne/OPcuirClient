import React, { useState } from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Typography } from "@mui/material"

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion"





function ProductPage(){
    const theme = useTheme()

    const [quantity, setQuantity] = useState(0)

    const list = [{id:1,name:"cuir blanc",price:10},
    {id:2,name:"cuir noir",price:10},
    {id:3,name:"cuir rouge",price:10},
    {id:4,name:"cuir bleu",price:10},
    {id:5,name:"cuir jaune",price:10},
    {id:6,name:"cuir vert",price:10},
    {id:7,name:"cuir doree",price:10}]


    return (
        <Container maxWidth="100vw" sx={{ flexGrow: 1, marginTop:'10vh' }} >
            <Grid container spacing={6}>
            {list.map((elem,index)=>{return(
                 <Grid item xs={6} md={4}>
                    <motion.div 
                    initial={{y:'-100%', opacity:0}} 
                    animate={{y:0,opacity:1}}
                    transition={{delay:`${index/4}`,duration:0.5}}
                    >
                    <Card elevation={3}>
                        <CardMedia
                        component="img"
                        alt={elem.name}
                        height="140"
                        image=""
                        sx={{background:theme.palette.secondary.light}}
                        />
                        <CardContent>
                            <Typography>{elem.name}</Typography>
                            <Typography>Prix : {elem.price} euros</Typography>
                        </CardContent>
                        <CardActions sx={{pr:2,pl:2}}>

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Button variant="contained" sx={{width:'fitContent'}}>
                                    <ShoppingBasketOutlinedIcon sx={{fontSize:'40', mr:2, ml:2}}/>
                                    <Typography variant="body1" sx={{fontSize:'40', mr:2, ml:2}}>Acheter</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <div style={{display:'flex',justifyContent:'center',alignContent:'baseline'}}>
                                    <IconButton onClick={()=>setQuantity(p => p+1)}><AddOutlinedIcon/></IconButton>
                                    <Typography variant="body1" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>{quantity}</Typography>
                                    <IconButton onClick={()=>setQuantity(p => p-1)}><RemoveOutlinedIcon/></IconButton>
                                </div>
                                
                            </Grid>
                        </Grid>
                        
                        </CardActions>
                    </Card>
                    </motion.div>

                </Grid>
            )})}
            </Grid>
        </Container>
    )
}export default ProductPage