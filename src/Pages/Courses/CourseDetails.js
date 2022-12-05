import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {name, pdfUrl, description, imgUrl, time} = courseDetail;

    const downloadPdf = () => {

    }
    const getPremiumAccess = () => {

    }


    return (
        <div className='my-5 container p-10'>
            <img style={{'height':'200px'}} src={imgUrl} alt="" />
           <p>Name: {name} </p> 
           <p>Description: {description} </p> 
           <p>Time: {time} </p> 
           <button onClick={downloadPdf} className="btn btn-sm mb-5">Download Pdf</button> <br/>
           <Link to='/checkout'>
           <button className="btn btn-sm">Get premium access</button>
           </Link>

        </div>
    );
};

export default CourseDetails;