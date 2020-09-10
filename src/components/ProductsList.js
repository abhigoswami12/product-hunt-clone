import React from "react";
import SingleProduct from "./SingleProduct";

function ProductsList() {
  return (
    <>
      <div className="products-head flex-between">
        <div>
          <p className="day-schedule">Today</p>
        </div>
        <div className="filter">
          <a href="#">popular</a>
          <a href="#">newest</a>
        </div>
      </div>
      <div className="all-products">
        {[
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          },
          {
            img: "/images/article-images/dummy.png",
            title: "Relativity2",
            "sub-title": "Lorem ipsum dolor sit amet consectetur adipisicing"
          }
        ].map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
