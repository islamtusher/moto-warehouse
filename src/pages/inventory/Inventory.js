import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams()
    const [{name, picture, price}, setbike] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setbike(data))
    }, [id])

    return (
        <div className='collecton-area'>
            <h1>collecton: {name}</h1>
            <h1>collecton: {price}</h1>
            <img src={picture} width={100} height={100} alt="" />
        </div>
    );
};

export default Inventory;