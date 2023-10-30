import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Comment = () => {
  const { id } = useParams();
  const { data, error } = useFetch(`https://dummyjson.com/comments/${id}`);
  return (
    <div>
      <h2>Comment {id}</h2>
      <div>
        {data &&
          Object.entries(data).map(([key, value]) => {
            return (
              <div key={key}>
                <p>
                  {key} :{" "}
                  {typeof value == "object" ? JSON.stringify(value) : value}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
