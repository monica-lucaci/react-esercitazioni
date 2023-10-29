import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const API_URL = "https://dummyjson.com/products";

const Products = () => {
  const { data, error } = useFetch(API_URL, { selector: "products" });

  return (
    <>
      <div>Products</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((product) => {
                const { id, title, price, images } = product;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>
                      <img style={{ maxWidth: "50px" }} src={images[0]} />
                    </td>
                    <tr>
                      <td>
                        <Link to={`/products/${id}`}>
                          <p>Read More...</p>
                        </Link>
                      </td>
                    </tr>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
