import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {name, description, imgUrl, time, id} = courseDetail;
console.log(courseDetail)
    // const downloadPdf = () => {

    // }



    return (
        <div className='my-5 container p-10'>
            <img style={{'height':'200px'}} src={imgUrl} alt="" />
           <p><span className='font-bold'>Name:</span> {name} </p> 
           <p><span className='font-bold'>Description:</span> {description} </p> 
           <p> <span className='font-bold'>Duration: </span> {time} </p> 
           {/* <button onClick={downloadPdf} className="btn btn-sm mb-5">Download Pdf</button> <br/> */}
           <Link to={`/checkout/${id}`}>
           <button className="btn btn-sm">Get premium access</button>
           </Link>

        </div>
    );
};

export default CourseDetails;