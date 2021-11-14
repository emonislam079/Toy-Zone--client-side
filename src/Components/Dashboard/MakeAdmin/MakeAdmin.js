import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, TextField } from '@mui/material';
import { useState } from 'react';
import './MakeAdmin.css';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
            
        })
        e.preventDefault()
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{'width': '80%', 'margin': 'auto'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="admin-form">
        <div>
            <h4>Add to Admin Panel</h4>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            label="Email"
            type='email'
            style={{'width': '90%'}} 
            onBlur={handleOnBlur}
            variant="outlined" />
            {/* <br />
            <br /> */}
            <button variant='contained'
            type='submit'>Make Admin</button>
            </form>
            <br />
            {success && <Alert severity="success">Make admin Successfully</Alert>}
        </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{'width': '100%'}} src="https://i.ibb.co/WGSPfhT/admin.jpg" alt="" />
        </Grid>
      </Grid>
    </Box>
        
    );
};

export default MakeAdmin;