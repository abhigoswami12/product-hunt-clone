import React from "react";
import SingleProduct from "./SingleProduct";

// import { ProductsData } from "../Data";

class ProductsList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }
  componentDidMount() {
    const url = this.props.url;
    // console.log("url", url);

    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer Y0DY0ii7LLvWCmA8g7QAdJyhfdzu7PXbLwVjjO-ISJY",
        Host: "api.producthunt.com",
        Origin: "https://localhost:3000"
      }
    })
      .then(res => res.json())
      .then(res => {
        // console.log("res", res);
        this.setState({ products: res.posts, loading: false });
      });
  }

  render() {
    // console.log("products", this.state.products);
    return (
      <>
        <div className="products-head flex-between">
          <div>
            <p className="day-schedule">{this.props.label}</p>
          </div>
          {this.props.label === "Today" ? (
            <div className="filter">
              <a href="##">popular</a>
              <a href="##">newest</a>
            </div>
          ) : (
            ""
          )}
        </div>
        {this.state.loading ? (
          "LOADING..."
        ) : (
          <div className="all-products">
            {this.state.products.map((product, index) => {
              // console.log("product", product);
              return <SingleProduct key={index} product={product} />;
            })}
          </div>
        )}
      </>
    );
  }
}

export default ProductsList;
