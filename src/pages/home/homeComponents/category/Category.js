import React from 'react';
import './Category.css'
import { Col, Container, Row } from 'react-bootstrap';

const Category = () => {
    return (
        <div id='categorys'>
            <h1 className='section-title'>MOTO CATEGORY</h1>
            <div className="category-section">
                <Container >
                    <Row xs={1} md={2} lg={4} className="gy-5">
                        <Col>
                            <div className="all-category category-1">
                                <h4>ROYELING</h4>
                                <img src="./images/moto-icon1.png" className='moto-icon' alt="" />
                                <p className='para'>COMFORT AND RELAX</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="all-category category-2">
                                <h4>CAFE RACER</h4>
                                <img src="./images/moto-icon5.png" className='moto-icon' alt="" />
                                <p>STYLISH AND COMFORT</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="all-category category-3">
                                <h4>SPORTS BIKE</h4>
                                <img src="./images/moto-icon3.png" className='moto-icon' alt="" />
                                <p>SPORTY LOOKS</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="all-category category-4">
                                <h4>SUPPER BIKE</h4>
                                <img src="./images/moto-icon4.png" className='moto-icon' alt="" />
                                <p>MORE POWERFULL</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Category;