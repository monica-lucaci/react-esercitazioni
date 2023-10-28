import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const { id } = useParams();
  const { data, error } = useFetch(`https://dummyjson.com/products/${id}`);
  return (
    <>
      <h1>Products: {id}</h1>
      <div>
        <pre>
          {data && (
            <div>
              {/* <div>{JSON.stringify(data, null, 2)}</div> */}
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>price</th>
                    <th>discountPercentage</th>
                    <th>rating</th>
                    <th>stock</th>
                    <th>brand</th>
                    <th>category</th>
                    <th>thumbnail</th>
                    <th>images</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.description}</td>
                    <td>{data.price}</td>
                    <td>{data.discountPercentage}</td>
                    <td>{data.rating}</td>
                    <td>{data.stock}</td>
                    <td>{data.brand}</td>
                    <td>{data.category}</td>
                    <td>
                        <img src={data.thumbnail} />
                    </td>
                    <td>
                        <img src={data.images[2]} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </pre>
      </div>
    </>
  );
};

export default Products;
