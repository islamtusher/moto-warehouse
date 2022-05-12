import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    // load myItems by filtering email
    useEffect(() => {
        fetch(`https://mysterious-basin-75687.herokuapp.com/myitems?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setMyItems(data)
            setLoading(false)
        })
            
    }, [user, myItems])
    
    // handle delete myItem
    const deleteMyItem=(id) => {
        const confirmaton = window.confirm("Are You Sure Want To Delete?")
        if (confirmaton) {
            fetch(`https://mysterious-basin-75687.herokuapp.com/bike/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your Item Deleted')
                })
        }
        return
    }
    return (
        <div className='pb-5'>
            <h1 className='section-title'> STROED ITEMS</h1>
            {
                loading &&
                    <div className='d-flex justify-content-center align-items-center'>
                        <Loading></Loading>
                    </div>
            }
            {/* on No items */}
            {   myItems?.length === 0 && !loading ?
                    <div className="text-center">
                        <h5 className='section-sub-title'>You Dont Have Any items</h5>
                        <Button onClick={()=>navigate('/additems')}>Add Item</Button>   
                    </div>
                    :
                    <></>
            }
            {/* on Items */}
            <Container className=''>
                <Row  xs={1} md={1} lg={2} className="gy-5 w-100 mx-0">
                    {
                        myItems.map(bike => 
                            <Col key={bike?._id} className="d-flex justify-content-center px-0 mx-0 ">
                                <div className="inventory-card">
                                    <div className='mb-2'>
                                        <h2 className='inventory-name'>{bike?.name}</h2>
                                        <h5>{bike?.title}</h5>
                                    </div>
                                    <img src={bike?.picture} className=" img-fluid w-100" height={100} alt="" />
                                    <div className='my-2'>
                                        <p className=''>{bike?.describe}</p>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className=''>
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