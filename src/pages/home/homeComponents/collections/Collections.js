
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useBikes from '../../../../customHooks/useBikes';
import SingleCollection from '../singleCollection/SingleCollection';

const Collections = () => {
    const navigate = useNavigate()
    const [bikes] = useBikes()
    // console.log(bikes);
    return (
        <div>
            <Container>
                <h1 className='section-title text-start'>MOTO COLLECTION</h1>
                <Row xs={1} md={2} lg={3} className="gy-5">
                    {
                        bikes.slice(0, 6).map(bike => <SingleCollection
                            key={bike._id}
                            bike={bike}>
                            </SingleCollection>)
                    }
                </Row>
                <Button onClick={()=>navigate('/manageInventory')}>Manage Inventory</Button>
            </Container>
            
        </div>
    );
};

export default Collections;