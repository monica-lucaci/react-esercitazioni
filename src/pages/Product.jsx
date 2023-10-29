import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  const { data, error } = useFetch(`https://dummyjson.com/products/${id}`);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Product {id}</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    {key === "thumbnail" ||
                    (key === "images" && Array.isArray(value)) ? (
                      <img
                        src={key === "thumbnail" ? value : value[0]}
                        alt={key}
                        style={{ maxWidth: "200px" }}
                      />
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
