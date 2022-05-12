import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Col, Row, Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSms } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import CustomLink from '../../../customLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseConfig';

const Footer = () => {
    const [user] = useAuthState(auth)
 
    return (
        <div id="contact">
            <div className='titles'>
                <h1 className='section-title text-center mb-0'>GET IN CLOSE</h1>
                <p className='section-sub-title'>FELL FREE TO CONTACT</p>
            </div>
            <div className='footer mt-5'>
                <Container>
                    <Row xs={1} md={2} lg={4} className="gy-5 py-5 justify-content-center ">
                        {/* about part */}
                        <Col className=''>
                            <div className='d-flex flex-column align-items-start '>
                                <h4 className='footer-title'>ABOUT US</h4>
                                <div className='conpany-info'>
                                    <img src="./images/logo.png" alt="" />
                                    <h5>MOTO WAREHOUSE</h5>
                                    <p>A world best inventory service company, Our warehousing and distribution services are regularly audited  </p>
                                </div>
                            </div>
                        </Col>
                        {/* Navigaton Part */}
                        <Col className=''>
                            <div className='d-flex flex-column align-items-start justify-content-start '>
                                <h4 className='footer-title'>OUR PAGES</h4>
                                <Navbar className='footer-page-part'>
                                    <Navbar.Collapse className='pages'>
                                        <Nav.Link className='footer-page' as={HashLink} to="/home#home">Home</Nav.Link>
                                        <Nav.Link className='footer-page' as={HashLink} to="/home#services">Services</Nav.Link>
                                        <Nav.Link className='footer-page' as={HashLink} to="/home#categorys">Categorys</Nav.Link>
                                        <Nav.Link className='footer-page' as={HashLink} to="/home#collections">Collection</Nav.Link>
                                        <Link className='footer-page ' to="/blogs">Blogs</Link>
                                        {
                                            !user?.email &&
                                            <>
                                                <Link className='footer-page ' to="/login">Login</Link>
                                                <Link className='footer-page ' to="/signup">SignUp</Link>
                                            </>
                                        }
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                        </Col>
                        {/* contact part */}
                        <Col className='d-flex flex-column align-items-start justify-content-start'>
                            <h4 className='footer-title'>CONTACAT</h4>
                            <div className="contact">
                                <p>
                                    <FontAwesomeIcon className='me-2' icon={faAddressCard} />
                                    Gulshan, Dhaka 1212
                                </p>
                                <p>
                                    <FontAwesomeIcon className='me-2' icon={faPhone} />
                                    01014095577
                                </p>
                                <p>
                                    <FontAwesomeIcon className='me-2' icon={faPhone} />
                                    010857326328
                                </p>
                                <p>
                                    <FontAwesomeIcon className='me-2' icon={faSms} />
                                    moto.warehouse@gmail.com
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex flex-column align-items-start'>
                                <h4 className='footer-title'>GOOGLE</h4>
                                <div  className='d-flex align-items-center justify-content-start'>
                                    <div className="social-contact d-flex flex-column justify-content-center align-items-center">
                                        <img src="./images/app.png" width="135" height="40" className="img-fluid mb-3 rounded-3 border border-1 border-light" alt="" />
                                        <img src="./images/app2.png" width="135" height="40" className="img-fluid rounded-3 border border-1 border-light" alt="" />
                                    </div>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
       </div>
    );
};

export default Footer;