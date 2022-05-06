import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './customLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='nav-contain' fixed="top" expand="lg">
                <Container className='py-3 '>
                    <Link className='brand' to={'/'}>Moto WareHouse</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto d-flex align-items-center p-0">
                            
                            <CustomLink to={'/'}> Home</CustomLink>
                            <CustomLink to={'/collection'}> Collection</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/contact'}> Contact</CustomLink>
                            
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;