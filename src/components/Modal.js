import React from "react";

class Modal extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (!this.props.showModal) {
      return null;
    } else {
      return (
        <>
          <div className="modal-outer-bg">
            <div className="modal-card-container">
              <legend className="modal-legend">Add Product</legend>
              <form action="" className="Modal-form">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Image Url"
                  className="modal-inp modal-img-url"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Title"
                  className="modal-inp modal-title"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Sub-title"
                  className="modal-inp modal-sub-title"
                />
                <div className="modal-btn-div">
                  <input
                    className="modal-inp-btn"
                    type="submit"
                    name=""
                    id=""
                    value="add product"
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Modal;
