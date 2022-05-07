import { faDeleteLeft, faStore, faStoreSlash, faTrashCan, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useBikes from '../../customHooks/useBikes';

const ManageInventory = () => {
    const [bikes] = useBikes()
    
    const handleDeleteItem = (id) => {
        fetch(`http://localhost:5000/bike/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h1 className='section-title'>MANAGE INVENTORY</h1>
            <Container>
                <Row  xs={1} md={2} lg={3} className="gy-5 w-100 m-0">
                    {
                        bikes.map(bike => 
                            <Col key={bike._id} className='p-0'>
                                <div className="service-cart">
                                    <div className="service-icon w-50">
                                        <img src={bike.picture} className='w-75' alt="" />
                                    </div>
                                    <div className="service-info w-50">
                                        <h5 className='mb-0'>{bike.name}</h5>
                                        <div className='d-flex'>
                                            <p className='me-4'>{bike.supplier}</p>
                                            <p>
                                                {bike.quantity > 0 && <FontAwesomeIcon className='me-2 text-success' icon={faStore} />}
                                                {bike.quantity <= 0 && <FontAwesomeIcon className='me-2 text-danger' icon={faStoreSlash} />}
                                                {bike.quantity}
                                            </p>
                                        </div>
                                        <Button onClick={()=>handleDeleteItem(bike._id)}  className='bg-danger mt-3'><FontAwesomeIcon className='me-2' icon={faDeleteLeft} />Delete</Button>
                                    </div>
                                </div>
                            </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageInventory;