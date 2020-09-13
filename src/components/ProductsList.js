import React from "react";
import SingleProduct from "./SingleProduct";

// import { ProductsData } from "../Data";

function ProductsList(props) {
  return (
    <>
      <div className="products-head flex-between">
        <div>
          <p className="day-schedule">{props.label}</p>
        </div>
        {props.label === "Today" ? (
          <div className="filter">
            <a href="#">popular</a>
            <a href="#">newest</a>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="all-products">
        {props.data.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
