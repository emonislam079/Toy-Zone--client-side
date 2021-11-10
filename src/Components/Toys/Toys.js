import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Toy from './Toy';

const Toys = () => {
    const [toys , setToys]= useState([]);

    useEffect(() => {
        fetch('./Toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
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
        
    );
};

export default Toys;