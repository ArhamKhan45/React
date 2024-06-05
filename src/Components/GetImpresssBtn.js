import React, { Component } from "react";
import DB_img from "./DB_img";
import "./GetImpresssBtn.css";
class GetImpresssBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataholder: DB_img,
    };
  }

  render() {
    const Img_show = this.state.dataholder.slice(2, 6).map((item) => {
      return (
        <div className="col-md-3 col-6 m-0 p-0" key={item.id}>
          <img src={item.image} alt="" srcset="" className="img-fluid" />
        </div>
      );
    });
    return (
      <div className="container-fluid">
        <div id="GI-item" class="collapse row my-4">
          {Img_show}
        </div>
        <div className="text-center">
          <button
            className="btn btn-dark rounded-0 GI-custombtn"
            data-bs-toggle="collapse"
            data-bs-target="#GI-item"
          >
            GETTING IMPRRESSED ?
          </button>
        </div>
      </div>
    );
  }
}
export default GetImpresssBtn;
