import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const MyOrder = () => {
  const {user} = useAuth();

    useEffect(() => {
      const url = `http://localhost:5000/order?id=${user.email}`;
        fetch(url)
        .then(res => res.json())
    }, [])
    return (
        <div>
            <h1>Here is My Order</h1>
            <TableContainer className='products-table' style={{'width': '90%', 'margin': 'auto'}} component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">manage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {products.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                {product.model}
              </StyledTableCell>
              <StyledTableCell align="right"><button onClick={() => handleDelete(product._id)}>Delete</button></StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrder;