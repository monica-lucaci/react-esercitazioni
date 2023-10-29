import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Products = () => {
  const { data, error } = useFetch("https://dummyjson.com/products", {
    selector: "products",
  });
  return (
    <>
      <div>
        <h2>Choose a product</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" ,gap:"20px"}}>
        {data &&
          Array.isArray(data) &&
          data.map((product) => {
            const { id, title, description,price,discountPercentage } = product;
            return (
              <div style={{border:"1px solid black", padding:"10px"}} key={id}>
                <h4>{title}</h4>
                <p>{description}</p>
                <p>Now ${price} </p>
                <p>{discountPercentage}% off</p>
                <Link to={`/products/${id}`}>
                <p>see more...</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
