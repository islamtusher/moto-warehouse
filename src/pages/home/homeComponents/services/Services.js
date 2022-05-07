import './Service.css'
import { faBoxOpen, faPlane, faTruckMoving, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
            <h1>OUR SERVICES</h1>
            <Container>
                <Row  xs={1} md={2} className="gy-5">
                    <Col className='d-flex align-items-center'>
                        <div className="service-icon ">
                            <FontAwesomeIcon className='icon ms-5 fs-1' icon={faTruckMoving} />
                        </div>
                        <div className="service-info">
                            
                                <h5>GROUND TRANSPORT</h5>
                                <p>MOTO-WareHouse began providing transportation solutions to Transports contract warehousing customers in the 1980s.</p>
                            
                        </div>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <div className="service-icon">
                            <FontAwesomeIcon className='icon ms-5 fs-1' icon={faWarehouse} />
                        </div>
                        <div className="service-info">
                            <h5>WAREHOUSING</h5>
                            <p>MOTO-WareHouse provides warehousing, fulfillment services, and transportation management across North America</p>
                        </div>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <div className="service-icon">
                            <FontAwesomeIcon className='icon ms-5 fs-1' icon={faBoxOpen} />
                        </div>
                        <div className="service-info">
                            <h5>PACKAGING AND STORAGE</h5>
                            <p>MOTO-WareHouse offers complete, customized solutions for all of your business storage needs.</p>
                        </div>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <div className="service-icon">
                            <FontAwesomeIcon className='icon ms-5 fs-1' icon={faPlane} />
                        </div>
                        <div className="service-info">
                            <h5>LOGISTIC SERVICE</h5>
                            <p>MOTO-WareHouse offers a host of logistic management services and supply chain solutions.</p>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;