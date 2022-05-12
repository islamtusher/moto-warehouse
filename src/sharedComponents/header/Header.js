import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../customLink/CustomLink';
import auth from '../../firebaseConfig';
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
                    <Navbar.Collapse id="basic-navbar-nav " className="">
                        <Nav className="ms-auto d-flex align-items-center p-0">
                            <CustomLink to={'/home'}> Home</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            {
                                user?.email &&
                                    <>
                                    <CustomLink to={'/manageInventory'}> ManageInventory</CustomLink>
                                    <CustomLink to={'/myitems'}> MyItems</CustomLink>
                                    <CustomLink to={'/additems'}> AddItems</CustomLink>
                                    </>
                            }
                            <CustomLink to={'/contact'}> Contact</CustomLink>
                        </Nav>   
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="d-flex align-items-center justify-content-center justify-content-xl-end">
                            {
                                user?.email ?
                                    <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center">
                                        <Button onClick={() => signOut(auth)} className='logout-btn'> Logout </Button>
                                        {user && user.photoURL ? <img className='user-img' src={user?.photoURL} alt=""/> : <p className='text-primary m-0'>{email}</p>  }
                                        
                                    </div>
                                    :
                                    <div className="d-flex flex-column flex-xl-row justify-content-between align-items-center">
                                        <CustomLink to={'/login'}> Login </CustomLink>        
                                        <CustomLink to={'/signup'}> Signup</CustomLink>
                                    </div>

                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;