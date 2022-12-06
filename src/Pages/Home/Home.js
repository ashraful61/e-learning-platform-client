import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Courses/Course';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='container mb-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 pt-6 pb-5'>
            {
                data.map(course => <Course key={course.id} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Home;