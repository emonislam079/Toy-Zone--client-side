import React from 'react';
import notfound from '../../images/error-404-10.jpg'

const NotFound = () => {
    return (
        <div className="mt-5 container">
            <img className="container"  src={notfound} alt="" height="500px" />
            
        </div>
    );
};

export default NotFound;