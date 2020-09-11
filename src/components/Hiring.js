import React from "react";
import SingleHiring from "./SingleHiring";

function UpcomingProducts() {
  return (
    <section>
      <div>
        <p className="upcoming-products-caption hiring-caption">Hiring Now</p>
      </div>
      <div className="upcoming-products-list">
        {[
          {
            img:
              "https://ph-files.imgix.net/fe9b6850-5cc2-4661-955d-38583ac79f0b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&fit=max",
            title: "Istantish",
            "sub-title": "Software Engineer",
            location: "SanFransisco, Remote"
          },
          {
            img: "",
            title: "AEI Group Ltd",
            "sub-title": "Senior Product Manager",
            location: "London, United Kingdom"
          },
          {
            img: "",
            title: "Automatic",
            "sub-title": "Marketing Data Scientist, WooCommerce",
            location: "Remote"
          },
          {
            img: "",
            title: "Modal",
            "sub-title": "Senior DevOps Engineer",
            location: "Remote US, US"
          }
        ].map((product, index) => (
          <SingleHiring key={index} product={product} />
        ))}
        <div className="sidebar-btn">
          <a href="#">
            <input
              className="view-btn"
              type="submit"
              name=""
              id=""
              value="View All Jobs"
            />
          </a>
          <p className="post-hiring">
            Hiring?{" "}
            <a className="post-job-link" href="#">
              Post a Job
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default UpcomingProducts;
