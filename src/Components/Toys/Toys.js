import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Toy from './Toy';

const Toys = () => {
    const [toys , setToys]= useState([]);

    useEffect(() => {
        fetch('./Toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    return (
        <div className="container mt-5 pt-3">
            
            <Row xs={1} md={3} className="g-4 container">
        {
            toys.map (toy=> <Toy
            key={toy.id}
            toy={toy}
            ></Toy>)
        }
</Row>
        </div>
    );
};

export default Toys;