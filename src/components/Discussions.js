import React from "react";
import { discussionData } from "../Data";
import SingleDiscussion from "./SingleDiscussion";

function Discussions() {
  return (
    <section>
      <div>
        <p className="upcoming-products-caption">Top Discussions</p>
      </div>
      <div className="upcoming-products-list">
        {discussionData.map((product, index) => (
          <SingleDiscussion key={index} product={product} />
        ))}
        <div className="sidebar-btn">
          <a className="discussion-link" href="#">
            View More Discussions
          </a>
        </div>
      </div>
    </section>
  );
}

export default Discussions;
