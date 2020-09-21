import React from "react";

function SingleProduct(props) {
  return (
    <article className="single-product">
      <div className="flex-between">
        <div className="product-div flex-start">
          <div className="product-img col">
            <img src={props.product.thumbnail.image_url} alt="articleImg" />
          </div>
          <div className="product-details">
            <h1 className="title">{props.product.name}</h1>
            <h3 className="sub-title">{props.product.tagline}</h3>
          </div>
        </div>
        <div className="flex-column upvote-col">
          <i className="fas fa-caret-up"></i>
          <p className="upvote-count">{props.product.votes_count}</p>
        </div>
      </div>
    </article>
  );
}

export default SingleProduct;
