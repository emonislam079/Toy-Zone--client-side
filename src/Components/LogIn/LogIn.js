import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Box } from '@mui/system';
import Header from '../Shared/Header/Header';

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading, loginUser, authError, user, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Box>
            <Header></Header>
        <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt:4}} item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>Login</Typography>
           {!isLoading && <form onSubmit={handleLoginSubmit} >
            <TextField 
            // required
                sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="Your Email"
                name="email"
                onBlur={handleOnChange}
                variant="standard" />
            <TextField 
            // required
                sx={{width:'75%', m:1}}
                type="password"
                id="standard-basic" 
                label="Your Password" 
                name="password"
                onBlur={handleOnChange}
                variant="standard" />
                <Button type='submit' sx={{width:'75%', m:1}} variant='contained'>Login</Button>
                <NavLink style={{textDecoration:"none"}} to="/register"><Button sx={{width:'75%', m:1}} variant='text'>New User? Please Register</Button></NavLink>
            </form>}
            <p>------------------------------------------</p>
            <Button onClick={handleGoogleSignIn}  sx={{width:'75%', m:1}} variant='contained'>Google Sign In</Button>
            <br />
           {isLoading && <CircularProgress />}
        {user?.email && <Alert severity="success">Login successfully</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
                <img  style={{width: "100%"}} src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg' alt="" />
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default LogIn;