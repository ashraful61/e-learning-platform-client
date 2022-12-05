import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="absolute flex h-full justify-center items-center"
      style={{ left: "2%", right: "2%" }}
    >
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          404, <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/'>
        <button className="btn btn-primary">Back To Home</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
