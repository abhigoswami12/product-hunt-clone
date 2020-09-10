import React from "react";

function SingleProduct(props) {
  console.log(props);
  return (
    <article className="single-product">
      <div className="flex-between">
        <div className="product-div flex-start">
          <div className="product-img col">
            <img src={props.product.img} alt="articleImg" />
          </div>
          <div className="product-details">
            <h1 className="title">{props.product.title}</h1>
            <h3 className="sub-title">{props.product["sub-title"]}</h3>
          </div>
        </div>
        <div className="flex-column upvote-col">
          <i class="fas fa-caret-up"></i>
          <p className="upvote-count">88</p>
        </div>
      </div>
    </article>
  );
}

export default SingleProduct;
