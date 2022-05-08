
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
                <div className="my-5 text-center">
                    <Button onClick={()=>navigate('/manageInventory')} className="py-2 fs-4">MANAGE INVENTORY</Button>
                </div>
            </Container>
            
        </div>
    );
};

export default Collections;