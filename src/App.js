import React, { useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import UpcomingProducts from "./components/UpcomingProducts";
import Hiring from "./components/Hiring";
import { todayData, yesterdayData, sundayData } from "./Data";
import Discussions from "./components/Discussions";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }
  render() {
    return (
      <>
        <Header />

        <section className="product-section">
          <div className="container flex-start">
            <div className="products-list">
              {[
                { label: "Today", data: todayData },
                { label: "Yesterday", data: yesterdayData },
                { label: "Sunday", data: sundayData }
              ].map((single, index) => (
                <ProductsList label={single.label} data={single.data} />
              ))}
            </div>
            <div className="side-bar">
              <UpcomingProducts />
              <Hiring />
              <Discussions />
              <button
                className="modal-button"
                onClick={event =>
                  this.setState({ showModal: !this.state.showModal })
                }
              >
                {this.state.showModal ? "X" : "Show Modal button"}
              </button>
              <Modal showModal={this.state.showModal} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App;
