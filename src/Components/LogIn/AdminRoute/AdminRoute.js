import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;