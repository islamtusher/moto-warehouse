import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams()
    const[ newQuantity, setUpDatedQuantity] = useState(0)
    const [bike, setbike] = useState({})
    const [loading, setLoading] = useState(false)
    const { name, picture, price, title, describe, quantity, sold, supplier } = bike

    //load single data by id
    useEffect(() => {
        setLoading(true)
        fetch(`https://mysterious-basin-75687.herokuapp.com/bike/${id}`)
            .then(res => res.json())
            .then(data => {
                setbike(data)
                setLoading(false)
            })
    }, [id, newQuantity])

    if (bike.name === undefined) {
        return  <Loading></Loading>
    } 
    
    // decress quantity for delivared
    const handleUpDateQuantity = (value, value2) => {
        const mainQuantity = parseInt(quantity)
        if (mainQuantity <= 0) {
            alert('stoke empty')
            return
        }
        setLoading(true)
        const newQuantity = mainQuantity - 1
        // const newSold = parseInt(value2) + 1
        const upDatedQuantity = { newQuantity }
    
        fetch(`https://mysterious-basin-75687.herokuapp.com/bike/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(upDatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    setUpDatedQuantity(upDatedQuantity)
                    setLoading(false)
                }
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
            // setUpDatedQuantity(newQuantity)

            fetch(`https://mysterious-basin-75687.herokuapp.com/bike/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(upDatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    setUpDatedQuantity(upDatedQuantity)
                    alert("Restock On Database")
                    e.target.reset()
                })
        }
    }

    return (
        <Container className='inventory-page '>
            <h1 className='section-title'>INVENTORY</h1>
            <Row xs={1} md={2}  className='gy-5 w-100 '>
                <Col className="d-flex justify-content-center px-0 mx-0 ">
                    <div className="inventory-card">
                        <div className='mb-2'>
                            <h2 className='inventory-name'>{name}</h2>
                            <h5>{title}</h5>
                        </div>
                        <img src={picture} className=" img-fluid w-100" height={100} alt="" />
                        <div className='my-2'>
                            <p className=''>{describe}</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='flex-div'>
                                <h3>Quantity </h3>
                                {
                                    loading ? <Loading></Loading>
                                        :
                                        <span className=''>{quantity}</span>
                                }
                            </div>
                            <div className='flex-div'>
                                <h3>Sold </h3>
                                <span className=''>{sold}</span>
                            </div>
                            <div className='flex-div'>
                                <h3>Price </h3>
                                <span className=''>{price}</span>
                            </div>
                            <div className='flex-div'>
                                <h3>Supplier </h3>
                                <span className=''>{supplier}</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <Button onClick={handleUpDateQuantity} className='mt-4' type="submit">Delivared</Button>
                        </div>
                    </div> 
                </Col>
                <Col className='p-0 d-flex justify-content-center align-items-center'>
                    <Form onSubmit={handleRestock} className='inventory-form '>
                        <input className='py-2 mb-4' type="text" name='quantity' placeholder='Push Stock' />
                        <Button className='' type='submit'> Restock</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Inventory;