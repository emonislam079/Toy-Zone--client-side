import axios from 'axios';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
import { Alert } from '@mui/material';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);
        const onSubmit = data => {
            console.log(data);
              axios.post('http://localhost:5000/products', data)
              .then(res => {
                  if(data?.price){
                   console.log(data);
                   setSuccess(true);
                  }
        })
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{'width': '100%', 'margin': 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="admin-form">
        <div className='add-product'>
            <h3 style={{'marginTop': '10px', 'color': 'brown'}}>Add a New Product</h3>
            <div className='input-portion'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("brand", { required: true} ) } Placeholder='Camera Brand' />
            <br />
            <textarea {...register("description")} Placeholder='Camera Description'/>
            <br />
            <input type="number" {...register("price")} Placeholder='Camera Price'/>
            <br />
            <input {...register("img")} Placeholder='Camera img' />
            <br />
            <input {...register("type")} Placeholder='Camera Type'/>
            <br />
            <input {...register("model")} Placeholder='Camera Model'/>
            <br />
            <input type="submit" />
            </form>
            </div>
            {success && <Alert severity="success">Added Product</Alert>}
            
        </div>
        </Grid>
        <Grid item xs={12} md={6} className='add-product-image'>
          <img style={{'width': '70%'}} src="https://i.ibb.co/ggnZsGh/add-Product.png" alt="" />
        </Grid>
      </Grid>
    </Box>
        
    );
};
export default AddProduct;





