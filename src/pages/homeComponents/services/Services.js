import './Services.css'
import { faBoxOpen, faPlane, faTruckMoving, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div id='services'>
            <Container>
                <h1  className='section-title text-center text-lg-end mb-0'>OUR SERVICES</h1>
                <Row  xs={1} md={1} lg={2} className="gy-5 w-100 m-0">
                    <Col className='p-0'>
                        <div className='service-cart'>
                            <div className="service-icon ">
                                <FontAwesomeIcon className='icon' icon={faTruckMoving} />
                            </div>
                            <div className="service-info">
                                <h5>GROUND TRANSPORT</h5>
                                <p>MOTO-WareHouse began providing transportation solutions to Transports contract warehousing customers in the 1980s.</p>
                            </div>
                       </div>
                    </Col>
                    <Col className='p-0'>
                        <div className="service-cart">
                            <div className="service-icon">
                                <FontAwesomeIcon className='icon' icon={faWarehouse} />
                            </div>
                            <div className="service-info">
                                <h5>WAREHOUSING</h5>
                                <p>MOTO-WareHouse provides warehousing, fulfillment services, and transportation management across North America</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='p-0'>
                        <div className="service-cart">
                            <div className="service-icon">
                                <FontAwesomeIcon className='icon' icon={faBoxOpen} />
                            </div>
                            <div className="service-info">
                                <h5>PACKAGING AND STORAGE</h5>
                                <p>MOTO-WareHouse offers complete, customized solutions for all of your business storage needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col className='p-0'>
                        <div className="service-cart">
                            <div className="service-icon">
                                <FontAwesomeIcon className='icon' icon={faPlane} />
                            </div>
                            <div className="service-info">
                                <h5>LOGISTIC SERVICE</h5>
                                <p>MOTO-WareHouse offers a host of logistic management services and supply chain solutions.</p>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;