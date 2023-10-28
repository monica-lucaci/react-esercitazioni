import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { data, error } = useFetch("https://dummyjson.com/products", {
    selector: "products",
  });

  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((product) => {
          const { id, title, description, images } = product;
          return (
            <div key={id}>
              <Link to={`/products/${id}`}>
                <h4>{title}</h4>
                <p>{description}</p>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={images[0]}
                />
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Home;
