import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';

import Banar1 from '../../../images/boy-1.png'

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 600
}

const Bannar = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={8}>
                    <Box>
                        <Typography variant="h2">
                        WELCOME TO TOYS ZONE
                        </Typography>
                        <Typography variant="h3" sx={{ my: 5, fontSize: 40, fontWeight: 300, color: 'gray' }}>
                        We offer a wide selection of children’s Toys at the best prices.
                        </Typography>
                        
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} style={verticalCenter} >
                    <img style={{  width: '350px' }} src={Banar1} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Bannar;