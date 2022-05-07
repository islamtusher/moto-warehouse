import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex flex-column justify-content-center align-items-start '>
            <div className='titile text-light '> 
                <div className="sub-title text-center">
                    <img className='logo' src="./images/logo.png" alt="" />
                    <h6>TAKING RIDES TO A NEWER LEVEL!</h6>
                </div>
                <div className="main-title">
                    <h1>THE COMBINATION OF <br/>POWER AND PERFECTION</h1>
                </div> 
            </div>
            <div className="banner-buttons ">
                {/* <button className='common-btn mb-3' type="submit"></button>
                <button className='common-btn' type="submit">Collection</button> */}
            </div>
        </div>
    );
};

export default Banner;