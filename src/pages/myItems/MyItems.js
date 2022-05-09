import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])

    // load myItems by filter email
    useEffect(() => {
        fetch(`https://mysterious-basin-75687.herokuapp.com/myitems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    },[user,myItems])
    if (myItems.length === 0) {
        return  <Loading></Loading>
    } 
    // handle delete myItem
    const deleteMyItem=(id) => {
        const confirmaton = window.confirm("Are You Sure Want To Delete?")
        if (confirmaton) {
            fetch(`https://mysterious-basin-75687.herokuapp.com/bike/${id}`, {
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
        <div className='pb-5'>
             <h1 className='section-title'> STROED ITEMS</h1>
            <Container className=''>
                <Row  xs={1} md={1} lg={2} className="gy-5 w-100 mx-0">
                    {
                        myItems.map(bike => 
                            <Col key={bike?._id} className="d-flex justify-content-center px-0 mx-0 ">
                                <div className="inventory-card">
                                    <div className='mb-2'>
                                        <h2 className='inventory-name'>{bike?.name}</h2>
                                        <hp>{bike?.title}</hp>
                                    </div>
                                    <img src={bike?.picture} className=" img-fluid w-100" height={100} alt="" />
                                    <div className='my-2'>
                                        <p className=''>{bike?.describe}</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='flex-div'>
                                            <h3>Quantity </h3>
                                            <span className=''>{bike?.quantity}</span>
                                        </div>
                                        <div className='flex-div'>
                                            <h3>Sold </h3>
                                            <span className=''>{bike?.sold}</span>
                                        </div>
                                        <div className='flex-div'>
                                            <h3>Price </h3>
                                            <span className=''>{bike?.price}</span>
                                        </div>
                                        <div className='flex-div'>
                                            <h3>Supplier </h3>
                                            <span className=''>{bike?.supplier}</span>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Button className='inventory-btn' onClick={()=>deleteMyItem(bike?._id)}>Delete Item</Button>
                                    </div>
                                </div> 
                            </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyItems;