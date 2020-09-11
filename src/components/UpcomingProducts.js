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
            img:
              "https://ph-files.imgix.net/fec0afe1-7f97-4f1b-96e1-9654ed16f644?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20",
            title: "nuffsaid",
            "sub-title": "A smart space for your work apps",
            follow: 1121
          },
          {
            img:
              "https://ph-files.imgix.net/80444cb9-ab0a-4d62-9e52-03e2f2d9c50a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20",
            title: "AskDesis",
            "sub-title": "The neighbourhood app",
            follow: 862
          },
          {
            img:
              "https://ph-files.imgix.net/b4066b87-83ef-4b13-b9be-a24c613adc24.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=40&h=40&fit=crop&bm=normal&bf=max&bh=20&bw=20",
            title: "MENTOR CLUB",
            "sub-title": "Weekly calls with mentors to help boost your career",
            follow: 146
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
