import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Slicetoy = (props) => {
    const {name, details, price, img, quantity, _id}= props.toy
    return (
      <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>
          <CardMedia
              component="img"
              style={{ width: 'auto',  margin: '0 auto' }}
              image={img}
              alt="green iguana"
          />
          <CardContent>
              <Typography variant="h3" component="div">
                  {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {details}
              </Typography>
              <Typography variant="h4" component="div">
                  Price:{price}
              </Typography>
              <Typography variant="h6" component="div">
                  Available: {quantity}pc
              </Typography>
              <Link to={`/orders/${_id}`}><Button  variant="contained">Buy Now</Button></Link>
          </CardContent>
      </Card>
  </Grid>
    );
};

export default Slicetoy;