import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';
import './Review.css'
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
  const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
        const onSubmit = data => {
            console.log(data);
              axios.post('https://agile-fortress-60515.herokuapp.com/reviews', data)
              .then(res => {
                  if(data.rating){
                    console.log(data);
                    setSuccess(true);
                    reset();
                  }
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{'width': '100%', 'margin': 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="admin-form">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Review us</h1>

          <form className="Reviews-form" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name") } Placeholder='Your Name' defaultValue={user.displayName} />
            <br />
            <textarea {...register("review")} Placeholder='Your review in word'/>
            <br />
            <input type="number" {...register("rating")} Placeholder='Rate us out of 5'/>
            <br />
            <input type="submit" />
            </form>
            {success && <Alert severity="success">Thanks for review us</Alert>}
            </div>
        </Grid>
        
      </Grid>
    </Box>
        
    );
};

export default Review;