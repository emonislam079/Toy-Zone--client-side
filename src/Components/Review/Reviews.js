import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
    }, []);
    return (
      <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Reviews
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                reviews.map(review =><Grid item xs={12} md={4}> <Review
                review={review}></Review> </Grid>)
            }
                </Grid>
            </Container>
        </Box>
        
    );
};

export default Reviews;