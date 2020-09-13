import React from "react";

function UpcomingSingleProduct(props) {
  return (
    <div className="upcoming-single-product flex-between">
      <div className="upcoming-product-content">
        <h3 className="upcoming-title">{props.product.title}</h3>
        <h4 className="upcoming-sub-title">{props.product["sub-title"]}</h4>
        <p className="upcoming-follow">
          Follow{" "}
          <span className="upcoming-follower-number">
            ({props.product.follow})
          </span>
        </p>
      </div>
      <div className="upcoming-product-img">
        <img src={props.product.img} alt="" />
      </div>
    </div>
  );
}

export default UpcomingSingleProduct;
