import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
    }, []);
    return (
        <Container maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        {
                reviews.map(review =><Grid item xs={12} md={4}> <Review
                review={review}></Review> </Grid>)
            }
        
      </Grid>
    </Box>
    </Container>
    );
};

export default Reviews;