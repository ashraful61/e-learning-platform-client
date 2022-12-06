import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
    const {id, imgUrl, name, time } = course
  console.log(course);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img style={{'height':'100px'}} src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {/* <p>{description}</p> */}
          <p>Duration: {time}</p>
          <div className="card-actions justify-center">
            <Link to={`/course/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
