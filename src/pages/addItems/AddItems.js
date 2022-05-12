
import React from 'react';
import './AddItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebaseConfig';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    // handle item adding form
    const onSubmit = data => {
        data['sold'] = 0;
        data['email'] = user?.email;
        // quantity validation
        if (isNaN(data.quantity) || /\D/.test(data.quantity)){
            alert("Please Enter A Numerical and Integer Number")
            return
        }
        // post the item on DB
        fetch('https://mysterious-basin-75687.herokuapp.com/bikes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your's Item added")
        })
    }
    return (
        <div>
            <div className='adding-form'>
                <Form onSubmit={handleSubmit(onSubmit)} className='form-area'>
                    <Container>
                        <h4 className='add-title '> ADD YOUR ITEMS</h4>
                        <p>Stoke Your Categorys, We Provied Best WareHouse Servies</p>
                        <Row xs={1} md={1} lg={2} className='form-contain '>
                            <Col className="form-part d-flex flex-column">
                                <input className='mb-3 py-2 px-2' placeholder='Service Name' type='text' name='service name'  {...register("name", { required: true }) } />
                                <input className='mb-3 py-2 px-2' placeholder='Item Title' type='text' name='title'  {...register("title", { required: true }) } />
                                <input className='mb-3 py-2 px-2' placeholder='Price ( Give Newmaric )' type="number" name='price' {...register("price", { required: true }) } />
                                <input className='mb-3 py-2 px-2' placeholder='Quantity' type="number" name='quantity' {...register("quantity", { required: true })} />
                            </Col>
                                
                            <Col className="form-part d-flex flex-column">
                                <input className='mb-3 py-2 px-2' placeholder='Supplier' type='text' name='supplier' {...register("supplier", { required: true })} />
                                <input className='mb-3 py-2 px-2' placeholder='Picture URL'  type='text' name='email' {...register("picture", { required: true }) } />
                                <textarea className='mb-3 pb-5 px-1' placeholder='Describtion'  {...register("describe", { required: true }) } />
                                
                            </Col>
                        </Row>
                        <div className='text-end'>
                            <button className='add-btn ' type="submit" value="">
                                <FontAwesomeIcon className='me-2' icon={faStore} />
                                ADD ITEM
                            </button>
                        </div>
                    </Container>
                </Form>
            </div>
        </div>
    );
};

export default AddItems;