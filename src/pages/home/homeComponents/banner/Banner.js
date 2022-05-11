import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner d-flex'>
            <Container className=' d-flex align-items-center '>
                <div className='d-flex flex-column '>
                    <div className='text-light text-lg-end mb-3'> 
                        <div className="sub-title ">
                            <img className='logo' src="./images/logo.png" alt="" />
                            <h6>TAKING RIDES TO A NEWER LEVEL!</h6>
                        </div>
                        <div className="main-title ">
                            <h1>GROUND OR AIR<br/> THERE IS NO <br/> STOPING FOR US</h1>
                        </div> 
                    </div>
                    <div className="banner-btns ">
                        <button onClick={()=>navigate('/collection')} className='common-btn  bg-white ' type="submit">COLLECTION</button>
                        <button onClick={()=>navigate('/services')} className='common-btn prouction-btn bg-white' type="submit">SERVICES</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;