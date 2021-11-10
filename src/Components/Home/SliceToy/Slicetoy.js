import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Slicetoy = (props) => {
    const {name, details, price, img, quantity, _id}= props.toy
    return (
        <div className="align-content-center">
           <Col>
      <Card>
        <Card.Img variant="top" src={img} width="150px" height="200px" />
        <Card.Body >
          <h1>{name}</h1>
          <Card.Text className="my-3">
            {details}
            <h3 className="my-3">Price: {price}Tk</h3>
            <h6 className="my-3">Available: {quantity}Pc</h6>
            {/* { <Link to={`/Booking/${_id}`}> */}
                <button className="btn btn-primary">Buy Now</button>
            {/* </Link>} */}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>  
        </div>
    );
};

export default Slicetoy;