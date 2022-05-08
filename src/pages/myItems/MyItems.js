import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    },[user,myItems])
    // console.log(myItems);

    // handle delete my item
    const deleteMyItem=(id) => {
        const confirmaton = window.confirm("Are You Sure Want To Delete?")
        if (confirmaton) {
            fetch(`http://localhost:5000/bike/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert('Your Item Deleted')
                })
        }
        return
        
    }
    return (
        <div>
            <h1 className='section-title'>My Items</h1>
            <p>data: {myItems.length}</p>
            {
                myItems.map(item =>
                    <div key={item._id}>
                        <li>{item.name}</li>
                        <Button onClick={()=>deleteMyItem(item._id)}>Delete</Button>
                    </div>)
            }
        </div>
    );
};

export default MyItems;