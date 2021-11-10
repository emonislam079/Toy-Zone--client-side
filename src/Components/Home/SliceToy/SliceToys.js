import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Slicetoy from './Slicetoy';

const SliceToys = () => {
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
        toys.slice(0,6).map(toy=> <Slicetoy
        key={toy.id}
        toy={toy}
        ></Slicetoy>)
    }
</Row>
    </div>
    );
};

export default SliceToys;