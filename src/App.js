import React from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import UpcomingProducts from "./components/UpcomingProducts";
import Hiring from "./components/Hiring";

function App() {
  return (
    <>
      <Header />
      <section className="product-section">
        <div className="container flex-start">
          <div className="products-list">
            <ProductsList />
          </div>
          <div className="side-bar">
            <UpcomingProducts />
            <Hiring />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
