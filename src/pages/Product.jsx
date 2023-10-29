import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    const {id} = useParams();
    const {data,error} = useFetch(`https://dummyjson.com/products/${id}`);

  return (
    <>
      <div>Product {id}</div>
      <div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre> }
      </div>
    </>
  
  )
}

export default Product