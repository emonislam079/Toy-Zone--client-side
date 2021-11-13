import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../Hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Toys Zone
                </Typography>
                <Link to="/toys"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">Toys</Button></Link>
                <Link to="/about"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">About Us</Button></Link>
                <Link to="/"><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit">something</Button></Link>
                {
                    user?.email ?
                        <Box>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                            <Button onClick={logout} color="inherit">Logout</Button>
                        </Box>
                        :
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                            <Button color="inherit">Login</Button>
                        </NavLink>
                }
            </Toolbar>
        </AppBar>
    </Box>
    );
};

export default Header;