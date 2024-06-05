import React from "react";
import "../Styles/productReview.css";
function ProductReview(props) {
  const displayProductReview = props.productReviewData.map((item, index) => {
    return (
      <div key={index} className="productReviewItem">
        <img src={item.image} alt="" srcSet="" />
        <h5>{item.review}</h5>
        <p>
          {item.name} <span>{item.price}</span>
        </p>
      </div>
    );
  });
  return (
    <>
      <div className="productReview">{displayProductReview}</div>
    </>
  );
}

export default ProductReview;
