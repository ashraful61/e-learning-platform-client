import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log('aaaa', data)
    return (
        <div className='p-10'>
            <img style={{'height':'200px'}} src={data?.imgUrl} alt="courseImg" />
            <p>Course Name: {data.name}</p>
            <p>Description: {data.description}</p>
            <p className='text-4xl'>Your checkout was successful</p>
        </div>
    );
};

export default Checkout;