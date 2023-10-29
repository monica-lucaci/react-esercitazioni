import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const User = () => {
  const { id } = useParams();

  const { data, error } = useFetch(`https://dummyjson.com/users/${id}`);

  console.log(data);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              Object.entries(data).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    {key === "image" ? 
                    (
                      <img src={value} alt={key} style={{ maxWidth: "200px" }} />
                    ) 
                    : typeof value === "object" ?
                     (
                      <pre>{JSON.stringify(value, null, 2)}</pre>
                    ) 
                    : 
                    (
                      value
                    )
                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
