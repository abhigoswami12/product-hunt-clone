import React from "react";
import UpcomingSingleProduct from "./UpcomingSingleProduct";

function UpcomingProducts() {
  return (
    <section>
      <div>
        <p className="upcoming-products-caption">
          Upcoming Products{" "}
          <span className="upcoming-products-sub-caption">Powered by Ship</span>
        </p>
      </div>
      <div className="upcoming-products-list">
        {[
          {
            img: "images/article-images/dummy.png",
            title: "Heading1",
            "sub-title": "Details",
            follow: 651
          },
          {
            img: "images/article-images/dummy.png",
            title: "Heading2",
            "sub-title": "Details",
            follow: 655
          },
          {
            img: "images/article-images/dummy.png",
            title: "Heading2",
            "sub-title": "Details",
            follow: 655
          },
          {
            img: "images/article-images/dummy.png",
            title: "Heading2",
            "sub-title": "Details",
            follow: 655
          }
        ].map((product, index) => (
          <UpcomingSingleProduct key={index} product={product} />
        ))}
        <div className="sidebar-btn">
          <a href="#">
            <input
              className="view-btn"
              type="submit"
              name=""
              id=""
              value="View All"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpcomingProducts;
