import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import CustomLink from '../../../../customLink/CustomLink';
import auth from '../../../../firebaseConfig';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const email = user?.email.split("@")[0]
    
    return (
        <div>
            <Navbar className='nav-contain' fixed="top" expand="xl">
                <Container className='py-2 '>
                    <Link className='brand' to={'/'}>Moto WareHouse</Link>
                    <Navbar.Toggle  className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto d-flex align-items-center p-0">
                            <CustomLink to={'/home#home'}> Home</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/contact'}> Contact</CustomLink>

                            {
                                user?.email ?
                                    <>
                                        <CustomLink to={'/myitems'}> MyItems</CustomLink>
                                        <CustomLink to={'/manageInventory'}> ManageInventory</CustomLink>
                                        <CustomLink to={'/additems'}> AddItems</CustomLink>
                                        {user && user.photoURL ? <img className='user-img' src={user?.photoURL} alt=""/> : <p className='text-dark m-0'>{email}</p>  }
                                        <Button onClick={()=>signOut(auth)} className='logout-btn'> Logout </Button>
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