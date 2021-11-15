import React from 'react';

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import useAuth from '../../../Hooks/useAuth';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-light primary" style={{"background-color": "#50EBEC"}}>
  <div class="container-fluid">
    <Link class='navbar-brand fs-2' to='/home'>Toys Zone</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class='nav-link active' aria-current='page' to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class='nav-link' to='/toys'>Toys</Link>
        </li>
        {
            user?.email ?
            <Box>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
            </NavLink>
            <Button onClick={logout} color="inherit">Logout</Button>
            <span>{user.displayName}</span>
        </Box>
            :
            <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>

        }
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Header;