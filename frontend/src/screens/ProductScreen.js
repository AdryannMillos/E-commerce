import React from "react";
import Rating from "../components/Rating";
import { useParams, Link } from "react-router-dom";

import data from "../data";

const ProductScreen = () => {
    
  const params = useParams();

  const product = data.products.find((x) => x._id == params.id);
  if (!product) {
    return <div>No product found</div>;
  }
  return (
    <div>
      <Link to="/">Back to Result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>{product.name}</li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>price : $ {product.price}</li>
            <li>
              description :<p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">$ {product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="sucess">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;