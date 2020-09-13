import React from "react";

function SingleDiscussion(props) {
  return (
    <div className="upcoming-single-product flex-between">
      <div className="upcoming-product-content">
        <h3 className="upcoming-title">{props.product.title}</h3>
      </div>
      <div className="upcoming-product-img discussion-img">
        <img src={props.product.img} alt="" />
      </div>
    </div>
  );
}

export default SingleDiscussion;
