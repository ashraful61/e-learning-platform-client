import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const Checkout = () => {
  const data = useLoaderData();
  console.log("aaaa", data);
  const ref = React.createRef();

  return (
    <div className="p-10">
      <div className="p-4" ref={ref}>
        <img style={{ height: "200px" }} src={data?.imgUrl} alt="courseImg" />
        <p>Course Name: {data.name}</p>
        <p>Description: {data.description}</p>
      </div>
      <p className="text-4xl">Your checkout was successful</p>
      <div className="pt-3">
        <ReactToPdf targetRef={ref} filename={`${data.name}.pdf`}>
          {({ toPdf }) => (
            <button className="btn btn-sm" onClick={toPdf}>
              Download pdf
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Checkout;
