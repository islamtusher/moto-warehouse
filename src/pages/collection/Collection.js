import React, { useEffect, useState } from 'react';
import './Collection.css'

const Collection = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
        
    }, [])
    console.log(bikes);
    return (
        <div className='collecton-area'>
            <h1>collecton {bikes?.length}</h1>
        </div>
    );
};

export default Collection;