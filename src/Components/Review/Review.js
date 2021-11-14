import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions, Rating } from '@mui/material';
import { Box } from '@mui/system';

const Review = (props) => {
  const {name, review, rating} = props.review;
  return (
      <Card className='reviewCard' style={{'height': '100%', 'margin': 'auto'}} >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{'color': 'blue'}}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{'textAlign': 'justify'}}>
          {review}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Box
    style={{'margin': 'auto'}}
    sx={{
      '& > legend': { mt: 2 },
    }}
  >
    <Typography component="legend">Rating</Typography>
    <Rating name="read-only" value={rating} readOnly />
    
  </Box>
    </CardActions>
  </Card>
    );
};

export default Review;