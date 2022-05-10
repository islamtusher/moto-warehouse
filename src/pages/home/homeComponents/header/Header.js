import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../../../customLink/CustomLink';
import auth from '../../../../firebaseConfig';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const email = user?.email.split("@")[0]
    
    return (
        <div>
            <Navbar className='nav-contain' fixed="top" expand="lg">
                <Container className='py-3 '>
                    <Link className='brand' to={'/'}>Moto WareHouse</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto d-flex align-items-center p-0">
                            {user && user.photoURL ? <img className='user-img' src={user?.photoURL} alt=""/> : <p className='text-dark m-0'>{email}</p>  }
                            <CustomLink to={'#home'}> Home</CustomLink>
                            <CustomLink to={'/home#collections'}> Collection</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/home#contact'}> Contact</CustomLink>
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