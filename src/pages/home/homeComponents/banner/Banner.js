import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex align-items-center '>
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
                <div className="banner-buttons ">
                    <button className='common-btn bg-white mb-3' type="submit">PURCHASE US</button>
                    <button className='common-btn bg-white' type="submit">PRODUCTION</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;