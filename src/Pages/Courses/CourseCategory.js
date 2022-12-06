import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className='p-3'>
            <h3 className='text-3xl'>Course Type</h3>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/course-categories/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseCategory;