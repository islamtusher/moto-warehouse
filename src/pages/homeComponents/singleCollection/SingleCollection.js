import React from 'react';
import './SingleCollection.css'
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDollarSign, faStore, faHandshake } from '@fortawesome/free-solid-svg-icons';

const SingleCollection = ({ bike }) => {
    const { _id,name, picture, price,quantity, supplier, describe } = bike
    const navigate = useNavigate()

    return (
        <Col className=' d-flex justify-content-center p-0'>
            <Card className='h-100 card'>
                <Card.Img src={picture} className='w-100 img-fluid card-img' alt="Card image" />
                <Card.Body>
                    <h1 className='font card-title'>{name}</h1>
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className='font' >
                            <FontAwesomeIcon className='info-icon' icon={faDollarSign} /> 
                            {price}
                        </h6>
                        <h6 className='font ' >
                            <FontAwesomeIcon className='info-icon' icon={faStore} />
                            {quantity}
                        </h6>
                        <h6 className='font ' >
                            <FontAwesomeIcon className='info-icon' icon={faHandshake} />
                            {supplier}
                        </h6>
                    </div>
                    <Card.Text className='font card-text'>{describe}</Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center align-items-center bg-white border-0 mt-3'>
                    <button onClick={()=>navigate(`/inventory/${_id}`)} className='common-btn' type="submit">STOCK MANAGE</button>
                </Card.Footer>
            </Card>
        </Col>
       
    );
};

export default SingleCollection;