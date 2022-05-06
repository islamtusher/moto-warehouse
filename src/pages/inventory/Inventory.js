import React, { useEffect, useState } from 'react';
import useBikes from '../../customHooks/useBikes';
import './Inventory.css'

const Inventory = () => {
    const [bikes] = useBikes()
    console.log(bikes);
    return (
        <div className='collecton-area'>
            <h1>collecton {bikes?.length}</h1>
        </div>
    );
};

export default Inventory;