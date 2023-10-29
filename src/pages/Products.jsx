import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products";

const Products = () => {
  const { data, error } = useFetch(API_URL, { selector: "products" });
  const [tbody, setTbody] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const getTotalPages = () => {
    return Array.isArray(data) && data.length > 0
      ? Math.ceil(data.length / limit)
      : 0;
  };

  const changePage = (mode) => {
    if(mode.toUpperCase() === "NEXT"){
        setPage((page)=>page+1)
    } else if(mode.toUpperCase() === "PREV"){
        setPage((page)=>page-1)
  }
}

const updateUI = () => {
    const startIndex = limit *(page-1);
    setTbody([...data].splice(startIndex,limit))
}

useEffect(()=>{
    updateUI();
},[page,data])

  return (
    <div>
      <div>
        <button disabled={page==1} onClick={()=>changePage("PREV")}>Prev</button>
        <span>
          page {page} of {getTotalPages()}
        </span>
        <button disabled={page==getTotalPages()} onClick={()=>changePage("NEXT")}>Next</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>images</th>
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.map((product) => {
              const { id, title, description, price, images } = product;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{price}</td>
                  <td>
                    <img width={"100px"} src={images[0]} />
                  </td>
                  <td>
                    <Link to={`/products/${id}`}>
                      <p>See more...</p>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
