import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams()
    const[ newQuantity, setUpDatedQuantity] = useState(0)
    const [{name, picture, price, title, describe, quantity, sold, supplier}, setbike] = useState({})
    
    //load single data by id
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setbike(data))
    }, [id, newQuantity])

    // update quantity
    const handleUpDateQuantity = (value) => {
        if (value <= 0) {
            alert('stoke empty')
            return
        }
        const quantity = parseInt(value) - 1
        const upDatedQuantity = {quantity}
        setUpDatedQuantity(upDatedQuantity)
        // console.log(typeof upDatedQuantity, upDatedQuantity);

        fetch(`http://localhost:5000/bike/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upDatedQuantity)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    // console.log(upDatedQuantity);
    return (
        // d-flex justify-content-evenly align-items-center
        <Container className='inventory-page '>
            <h1 className='section-title'>INVENTORY</h1>
            <Row xs={1} md={2}  className='gy-5 w-100 '>
                <Col className="stock-review p-0 ">
                    <div className='inventory-name'>
                        <h2>{name}</h2>
                        <h6>{title}</h6>
                    </div>
                    <img src={picture} className="inventory-img img-fluid w-75" height={100} alt="" />
                    <div className=''>
                        <p>{describe}</p>
                    </div>
                    <div className='w-75 d-flex justify-content-between align-items-center'>
                        <div className='flex-div'>
                            <h3>Quantity: </h3>
                            <span className=''>{quantity}</span>
                        </div>
                        <div>
                            <h3>Sold: </h3>
                            <span className=''>{sold}</span>
                        </div>
                        <div>
                            <h3>Price: </h3>
                            <span className=''>{price}</span>
                        </div>
                        <div>
                            <h3>Supplier: </h3>
                            <span className=''>{supplier}</span>
                        </div>
                    </div>
                    <button onClick={()=>handleUpDateQuantity(quantity)} className='mt-2' type="submit">Delivared</button>
                </Col>
                <Col className='p-0 '>
                    <Form className='inventory-form '>
                        <input type="text" placeholder='Push Stock' />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Inventory;