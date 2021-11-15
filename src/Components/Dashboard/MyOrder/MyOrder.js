import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React, { useEffect, useState } from 'react';

import useAuth from '../../../Hooks/useAuth';


const MyOrder = () => {
  const {user} = useAuth();
  const [Orders, setOrders]= useState([]);
    useEffect(() => {
      const url = `https://agile-fortress-60515.herokuapp.com/order?email=${user.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])



    
    return (
      <div>
            <h2>My Orders: {Orders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Products Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.productsName}
                                </TableCell>
                                <TableCell align="center">{row.price}Tk</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      
    );
};

export default MyOrder;