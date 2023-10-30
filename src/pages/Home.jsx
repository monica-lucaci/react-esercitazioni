import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = (await response.json()).products;
      if (response.ok) {
        setData(result);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {data.length > 0 &&
        data.map((product) => <Card key={product.id} {...product} />)}
    </div>
  );
};

export default Home;
