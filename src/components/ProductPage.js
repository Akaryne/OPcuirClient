import React, { useState } from "react"
import BoxProduct from "./BoxProduct";
import {Container, Grid} from "@mui/material"

import { useTheme } from "@emotion/react";
import { motion } from "framer-motion"





function ProductPage(){
    const theme = useTheme()

    const [quantity, setQuantity] = useState(0)

    const list = [{id:1,name:"cuir blanc",price:10,rating:4.5,avis:10},
    {id:2,name:"cuir noir",price:10,rating:4.5,avis:20},
    {id:3,name:"cuir rouge",price:10,rating:4,avis:30},
    {id:4,name:"cuir bleu",price:10,rating:4,avis:14},
    {id:5,name:"cuir jaune",price:10,rating:5,avis:5},
    {id:6,name:"cuir vert",price:10,rating:5,avis:102},
    {id:7,name:"cuir doree",price:10,rating:3.5,avis:56}]

    return (
        <Container maxWidth="100vw" sx={{ flexGrow: 1, marginTop:'10vh' }} >
            <Grid container spacing={6}>
            {list.map((elem,index)=>{return(
                 <Grid item xs={6} md={4} key={elem.id}>
                    <BoxProduct elem={elem} />
                </Grid>
            )})}
            </Grid>
        </Container>
    )
}export default ProductPage