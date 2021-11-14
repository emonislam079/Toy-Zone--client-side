import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hooks/useAuth';
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState({});
    const{user } = useAuth();
    const { productId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
      fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result =>{
          if(result.insertedId){
            alert('Order processed successfully');
            reset();
            
          }
        })
    };
  
    

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div className="container mt-5">
  <div className="row p-3">
    <div className="col">
    <Card sx={{ minWidth: 275, border: 0, boxShadow: 3 }}>
          <CardMedia
              component="img"
              style={{ width: 'auto', margin: '0 auto' }}
              image={orders.img}
              alt="green iguana"
          />
          <CardContent>
              <Typography variant="h3" component="div">
                  {orders.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  {orders.details}
              </Typography>
              <Typography variant="h4" component="div">
                  Price: {orders.price}
              </Typography>
              <Typography variant="h5" component="div">
                  Available :{orders.quantity}pc
              </Typography>
              
          </CardContent>
      </Card>
    </div>
    <div className="col">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <h1>Place Order</h1>

                <form className="Orders-form" onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("name")} />

                <input  {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                
                <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                
                <input placeholder="phone number" defaultValue="" {...register("phone", { required: true }) } />
                
                <input type="submit" />
      
                
            </form>
            </div>
    </div>
  </div>
    
        </div>
    );
};

export default Orders;