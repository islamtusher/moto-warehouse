import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    const navigate = useNavigate()
    
    return (
        <div className='banner'>
            <Container className=' d-flex flex-column flex-md-row  align-items-center  justify-content-evenly '>
                <div className='d-flex flex-column '>
                    <div className='text-light  mb-3'> 
                        <div className="sub-title ">
                            <img className='logo' src="./images/logo.png" alt="" />
                            <h6>TAKING RIDES TO A NEWER LEVEL!</h6>
                        </div>
                        <div className="main-title ">
                            <h1>GROUND OR AIR <br/> THERE IS NO <br/> STOPING FOR US</h1>
                        </div> 
                    </div>
                    <div className="banner-btns ">
                        <button onClick={()=>navigate('/collection')} className='common-btn w-100 text-white border border-1 border-white ' type="submit">COLLECTION</button>
                        <button onClick={()=>navigate('/services')} className='common-btn w-100 prouction-btn text-white border border-1 border-white' type="submit">SERVICES</button>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center justify-content-md-end '>
                    <img className='w-75 mt-5 mt-md-0' src="./images/world.png" alt="" />
                </div>
            </Container>
        </div>
                    
        
    );
};

export default Banner;