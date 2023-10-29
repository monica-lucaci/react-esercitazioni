import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const { data, error } = useFetch(`https://dummyjson.com/products/1`);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product {id}</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.entries(data).map(([key, value]) => {
                console.log(key,value)
             return(
                <tr key={key}>
                <td>{key} </td>
                <td>{Array.isArray(value) ? value.length : value}</td>
              </tr>
             ) 
            })}
        </tbody>
      </table>
    </>
  );
};

export default Product;
