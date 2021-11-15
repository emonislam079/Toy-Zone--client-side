import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Toy from './Toy';
import Header from '../Shared/Header/Header';

const Toys = () => {
    const [toys , setToys]= useState([]);

    useEffect(() => {
        fetch('https://agile-fortress-60515.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    return (
        <Box>
        <Header></Header>
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    OUR PRODUCTS
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        toys.map (toy=> <Toy
                            key={toy.id}
                            toy={toy}
                            ></Toy>)
                    }
                </Grid>
            </Container>
        </Box>
        </Box>
        
    );
};

export default Toys;