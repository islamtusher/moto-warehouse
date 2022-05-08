import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebaseConfig';
import CustomLink from './customLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar className='nav-contain' fixed="top" expand="lg">
                <Container className='py-3 '>
                    <Link className='brand' to={'/'}>Moto WareHouse</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto d-flex align-items-center p-0">
                            {user?.email && <p className='text-dark m-0'>{user?.email}</p>}
                            <CustomLink to={'/'}> Home</CustomLink>
                            {/* <CustomLink to={'/inventory'}> Inventory</CustomLink> */}
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/contact'}> Contact</CustomLink>
                            {
                                user?.email ?
                                    <>
                                        <CustomLink to={'/myitems'}> MyItems</CustomLink>
                                        <CustomLink to={'/manageInventory'}> ManageInventory</CustomLink>
                                        <CustomLink to={'/additems'}> AddItems</CustomLink>
                                        <Button onClick={()=>signOut(auth)} className='bg-white py-1 px-2 border-0 ms-3 text-dark'> LogOut </Button>
                                    </>
                                    :
                                    <>
                                        <CustomLink to={'/login'}> Login </CustomLink>        
                                        <CustomLink to={'/signup'}> Signup</CustomLink>
                                    </>
                            }
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;