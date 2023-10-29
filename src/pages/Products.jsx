import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const API_URL = "https://dummyjson.com/products";

const Products = () => {
  const { data, error } = useFetch(API_URL, { selector: "products" });

  return (
    <div>
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
          {data &&
            data.map((product) => {
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
