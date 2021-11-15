import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, TextField } from '@mui/material';
import { useState } from 'react';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { reset } = useForm();
    
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://agile-fortress-60515.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount){
                setSuccess(true);
                reset();
            }
            
        })
        e.preventDefault()
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{'width': '80%', 'margin': 'auto'}}>
      
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
            <Button variant='contained'
            type='submit'>Make Admin</Button>
            </form>
            <br />
            {success && <Alert severity="success">Make admin Successfully</Alert>}
        </div>
        </Grid>
        
      
    </Box>
        
    );
};

export default MakeAdmin;