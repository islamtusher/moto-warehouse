import './ManageInventory.css'
import { faDeleteLeft, faStore, faStoreSlash, faTrashCan, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useBikes from '../../customHooks/useBikes';

const ManageInventory = () => {
    const [bikes] = useBikes()
    const { register, handleSubmit } = useForm();

    // handle item delete from DB
    const handleDeleteItem = (id) => {
        const confirmaton = window.confirm("Are You Sure To Delete")
        if (confirmaton) {
            fetch(`http://localhost:5000/bike/${id}`, {
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

    // handle item adding form
    const onSubmit = data => {
        fetch('http://localhost:5000/bikes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('item added')
        })
    }
    return (
        <div>
            <h1 className='section-title'>MANAGE INVENTORY</h1>
            <Container>
                <Button>Add Item</Button>
                <Row xs={1} md={2} className="gy-5 w-100 m-0">
                    <Col className='delete-management'>
                        <Row  xs={1} md={2} lg={2} className="gy-5 w-100 m-0">
                            {
                                bikes.map(bike => 
                                    <Col key={bike._id} className='p-0'>
                                        <div className="service-cart">
                                            <div className="service-icon w-50">
                                                <img src={bike.picture} className='w-75' alt="" />
                                            </div>
                                            <div className="service-info w-50">
                                                <h5 className='mb-0'>{bike.name}</h5>
                                                <div className='d-flex'>
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
                    </Col>
                    <Col className='adding-management'>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column mx-auto '>
                                <input className='mb-2 py-2 px-1' placeholder='Service Name'  {...register("name", { required: true }) } />
                                <input className='mb-2 py-2 px-1' placeholder='Item Title'  {...register("title", { required: true }) } />
                                <input className='mb-2 py-2 px-1' placeholder='Price' type="number" {...register("price", { required: true }) } />
                                <input className='mb-2 py-2 px-1' placeholder='Picture URL'  {...register("picture", { required: true }) } />
                                <input className='mb-2 py-2 px-1' placeholder='Quantity' {...register("quantity", { required: true })} />
                                <input className='mb-2 py-2 px-1' placeholder='Supplier' {...register("supplier", { required: true })} />
                                <input className='mb-2 py-2 px-1' placeholder='Sold' value='0' disabled {...register("sold")} />
                                <textarea className='mb-2 py-2 px-1' placeholder='Describtion'  {...register("describe", { required: true }) } />
                                <input type="submit" value="Add" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageInventory;