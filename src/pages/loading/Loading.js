import React from 'react';
import { Spinner } from 'react-bootstrap';
// w-100 d-flex justify-content-center align-items-center 'height': '700px'
const Loading = () => {
    return (
        <div style={{ 'height': '25px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner className='' animation="border" variant="primary" />
        </div>
    );
};

export default Loading;