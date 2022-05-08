import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams()
    const[ newQuantity, setUpDatedQuantity] = useState(0)
    const [bike, setbike] = useState({})
    const {name, picture, price, title, describe, quantity, sold, supplier} = bike
    //load single data by id
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${id}`)
            .then(res => res.json())
            .then(data => setbike(data))
    }, [id, newQuantity, bike])

    // decress quantity for delivared
    const handleUpDateQuantity = (value, value2) => {
        if (value <= 0) {
            alert('stoke empty')
            return
        }
        const newQuantity = parseInt(value) - 1
        // const newSold = parseInt(value2) + 1
        const upDatedQuantity = { newQuantity }
        setUpDatedQuantity(upDatedQuantity)

        fetch(`http://localhost:5000/bike/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upDatedQuantity)
        })
    }

    // add quantity for handleRestock
    const handleRestock = (e) => {
        e.preventDefault()
        const reStockValue = e.target.quantity.value
        
        // user input validation
        if (isNaN(reStockValue) || /\D/.test(reStockValue)) {
            alert("Please Enter A Numerical and Integer Number")
            return
        }
        else {
            const newQuantity = parseInt(quantity) + parseInt(reStockValue)
            const upDatedQuantity = {newQuantity}
            setUpDatedQuantity(newQuantity)

            fetch(`http://localhost:5000/bike/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(upDatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    alert("Restock On Database")
                    e.target.reset()
                })
        }
    }

    return (
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
                    <button onClick={()=>handleUpDateQuantity(quantity, sold)} className='mt-2' type="submit">Delivared</button>
                </Col>
                <Col className='p-0 '>
                    <Form onSubmit={handleRestock} className='inventory-form '>
                        <input type="text" name='quantity' placeholder='Push Stock' />
                        <Button type='submit'> Restock</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Inventory;