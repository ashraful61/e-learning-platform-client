import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {name, id, pdfUrl, description, imgUrl, time} = courseDetail
    return (
        <div className='my-5 container p-10'>
            <img style={{'height':'100px'}} src={imgUrl} alt="" />
           <p>Name: ${name} </p> 
           <p>Description: ${description} </p> 
           <p>Time: ${time} </p> 
            
        </div>
    );
};

export default CourseDetails;