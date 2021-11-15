import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
        const onSubmit = data => {
            console.log(data);
              axios.post('https://agile-fortress-60515.herokuapp.com/products', data)
              .then(res => {
                  if(data?.price){
                   console.log(data);
                   setSuccess(true);
                   reset()
                  }
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{'width': '100%', 'margin': 'auto'}}>
      
        <Grid item xs={12} md={6}>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Add Product</h1>

                <form className="Orders-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Products Name"  {...register("name", { required: true } )} />

                <input placeholder="Products Details"  {...register("details", { required: true })} />

                <input placeholder="Products Id"  {...register("id", { required: true })} />
                
                <input placeholder="Picture" defaultValue="" {...register("img", { required: true })} />
                
                <input placeholder="Price" defaultValue="" {...register("price", { required: true }) } />

                <input placeholder="Quantity" defaultValue="" {...register("quantity", { required: true }) } />
                
                <input type="submit" />
                </form>
            </div>
            {success && <Alert severity="success">Added Product</Alert>}
            
        </Grid>
        
    </Box>
        
    );
};
export default AddProduct;





