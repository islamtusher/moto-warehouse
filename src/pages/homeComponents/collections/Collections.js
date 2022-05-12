
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikes from '../../../customHooks/useBikes';
import Loading from '../../loading/Loading';
import SingleCollection from '../singleCollection/SingleCollection';

const Collections = () => {
    const navigate = useNavigate()
    const [bikes] = useBikes() // load all bikes from DB

    return (
        <div id='collections'>
            <Container>
                {
                    bikes.length === 0 &&
                        <div style={{ 'height': '700px' }} className='d-flex justify-content-center align-items-center'>
                            <Loading></Loading>
                        </div>
                } 
                <h1 className='section-title text-center text-lg-start '>MOTO COLLECTION</h1>
                <Row xs={1} md={2} lg={3} className="gy-5">
                    {
                        // Every Single bike or collection
                        bikes.slice(0, 6).map(bike => <SingleCollection
                            key={bike._id}
                            bike={bike}>
                            </SingleCollection>)
                    }
                </Row>
                {/* Go to Manage Inventoty Page */}
                <div className="my-5 text-center">
                    <Button onClick={()=>navigate('/manageInventory')} className="py-2 fs-4">MANAGE INVENTORY</Button>
                </div>
            </Container>
            
        </div>
    );
};

export default Collections;