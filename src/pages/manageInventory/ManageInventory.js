import React from 'react';
import './ManageInventory.css'
import { faDeleteLeft, faStore, faStoreSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useBikes from '../../customHooks/useBikes';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const ManageInventory = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const [bikes] = useBikes()

    if (loading || bikes.length === 0) {
      return <div style={{ 'height': '700px'}} className='d-flex justify-content-center align-items-center'><Loading></Loading></div>

    } 
    // handle item delete from DB
    const handleDeleteItem = (id) => {
        const confirmaton = window.confirm("Are You Sure To Delete")
        if (confirmaton) {
            fetch(`https://mysterious-basin-75687.herokuapp.com/bike/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert('One Item Deleted')
                })
        }
        return
    }

    return (
        <div>
            <h1 className='section-title'>MANAGE INVENTORY</h1>
            <Container>
                <div className="text-center">
                    <Button className='py-2 px-3' onClick={()=>navigate('/additems')}>Add Item</Button>
                </div>
                <Row  xs={1} md={2} lg={3} className="gy-5 w-100 m-0">
                    {
                        bikes.map(bike => 
                            <Col key={bike._id} className='p-0'>
                                <div className="service-cart">
                                    <div className="service-icon w-50">
                                        <img src={bike.picture} className='w-75' alt="" />
                                    </div>
                                    <div className="service-info w-50">
                                        <h5 className='mb-0'>{bike.name}</h5>
                                        <div className='d-flex justify-content-center justify-content-sm-start'>
                                            <p className='me-4'>{bike.supplier}</p>
                                            <p>
                                                {bike.quantity > 0 && <FontAwesomeIcon className='me-2 text-success' icon={faStore} />}
                                                {bike.quantity <= 0 && <FontAwesomeIcon className='me-2 text-danger' icon={faStoreSlash} />}
                                                {bike.quantity}
                                            </p>
                                        </div>
                                        <Button onClick={()=>handleDeleteItem(bike._id)}  className='bg-danger mt-3 fs-5'><FontAwesomeIcon className='me-2' icon={faDeleteLeft} />Delete</Button>
                                    </div>
                                </div>
                            </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageInventory;