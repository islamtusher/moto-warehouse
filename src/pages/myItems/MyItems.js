import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyItems(data))
    },[user,setMyItems])
    console.log(myItems);
    return (
        <div>
            <h1 className='section-title'>My Items</h1>
            <p>data: {myItems.length}</p>
        </div>
    );
};

export default MyItems;