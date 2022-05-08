
import React from 'react';
import './AddItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebaseConfig';

const AddItems = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();

    // handle item adding form
    const onSubmit = data => {
        data['sold'] = 0;
        data['email'] = user?.email;
        console.log(data);
        if (isNaN(data.quantity) || /\D/.test(data.quantity)){
            alert("Please Enter A Numerical and Integer Number")
            return
        }

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
            <div className='adding-form'>
                <h1 className='section-title'> ADD ITEMS</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='form-part d-flex mx-auto '>
                    <div className="d-flex flex-column">
                        <input className='mb-2 py-2 px-1' placeholder='Service Name' type='text' name='service name'  {...register("name", { required: true }) } />
                        <input className='mb-2 py-2 px-1' placeholder='Item Title' type='text' name='title'  {...register("title", { required: true }) } />
                        <input className='mb-2 py-2 px-1' placeholder='Price ( Give Newmaric )' type="number" name='price' {...register("price", { required: true }) } />
                        <input className='mb-2 py-2 px-1' placeholder='Quantity' type="number" name='quantity' {...register("quantity", { required: true })} />
                        <input className='mb-2 py-2 px-1' placeholder='Supplier' type='text' name='supplier' {...register("supplier", { required: true })} />
                    </div>
                    <div className="d-flex flex-column">
                        <input className='mb-2 py-2 px-1' placeholder='Picture URL'  type='text' name='email' {...register("picture", { required: true }) } />
                        <textarea className='mb-2 py-2 px-1' placeholder='Describtion'  {...register("describe", { required: true }) } />
                        <input type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;