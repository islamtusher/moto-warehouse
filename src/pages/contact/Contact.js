import './Contact.css'
import { useForm } from 'react-hook-form';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (e) => {
        e.preventDafault()
    }
    return (
        <div>
            <div className='contact-page'>
                <Container className='d-flex flex-column flex-lg-row justify-content-evenly align-items-center'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='form-area m-0'>
                        <div className="contact-form">
                            <h4 className='add-title '>Send Us A Message</h4>
                            <p>As soon as possible we you seen feedback</p>
                            <Row xs={1} md={1} lg={2} className='form-contain '>
                                <Col className="form-part d-flex flex-column">    
                                    <input className='mb-3 py-2 px-2' placeholder='Your Name' type='text' name='name'  {...register("name", { required: true }) } />
                                    <input className='mb-3 py-2 px-2' placeholder='Mobile' type="number" name='mobile' {...register("mobile", { required: true }) } />
                                    <input className='mb-3 py-2 px-2' placeholder='Email' type='text' name='email'  {...register("email", { required: true }) } />
                                </Col>
                                <Col className="form-part d-flex flex-column">
                                    <input className='mb-3 py-2 px-2' placeholder='Country' type='text' name='country' {...register("country", { required: true })} />
                                    <textarea className='mb-3 pb-5 px-1 border border-2' placeholder='Message'  {...register("message", { required: true }) } />
                                    
                                </Col>
                            </Row>
                            <div className='text-end'>
                                <Button className='add-btn ' type="submit" value="">
                                    <FontAwesomeIcon className='me-2' icon={faPlane} />
                                    Send Us
                                </Button>
                            </div>
                        </div>
                    </Form>
                    <div className=" d-flex  align-items-center justify-content-center justify-content-lg-end ">
                        <img className='w-75 ' src="./images/contact.jpeg" alt="contact-img" />
                    </div>
                </Container>
                
            </div>
        </div>
    );
};

export default Contact;