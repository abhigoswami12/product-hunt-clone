import React from "react";

function SingleHiring(props) {
  return (
    <div className="single-hiring upcoming-single-product flex-between">
      <div className="upcoming-product-content">
        <h3 className="upcoming-title">{props.product.title}</h3>
        <h4 className="upcoming-sub-title">{props.product["sub-title"]}</h4>
        <p className="upcoming-follow">{props.product.location}</p>
      </div>
      <div className="upcoming-product-img">
        <img src={props.product.img} alt="" />
      </div>
    </div>
  );
}

export default SingleHiring;
