import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useBikes from '../../../../customHooks/useBikes';
import SingleCollection from '../singleCollection/SingleCollection';

const Collections = () => {
    const [bikes] = useBikes()
    // console.log(bikes);
    return (
        <div>
            <Container>
                <h1>Moto Collection</h1>
                <Row xs={1} md={2} lg={3} className="gy-5">
                    {
                        bikes.slice(0, 6).map(bike => <SingleCollection
                            key={bike._id}
                            bike={bike}>
                            </SingleCollection>)
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default Collections;