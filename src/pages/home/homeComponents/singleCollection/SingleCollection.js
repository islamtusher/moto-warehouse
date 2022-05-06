import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCollection = ({ bike }) => {
    const { name, picture, price, describe } = bike
    console.log(picture);
    return (
        <Col className='d-flex justify-content-center p-0'>
            <Card className='h-100 card'>
                <Card.Img src={picture} className='w-100 img-fluid card-img' alt="Card image" />
                <Card.Body>
                    <h1 className='font card-title'>{name}</h1>
                    <h6 className='font card-price' >{price}<small className='text-dark'></small></h6>
                    <Card.Text className='font card-text'>{describe}</Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center align-items-center bg-white border-0 mt-3'>
                    <button className='common-btn' style={{'border': '1px solid black', 'color': 'black'}} type="submit">Manage Stock</button>
                </Card.Footer>
            </Card>
        </Col>
       
    );
};

export default SingleCollection;