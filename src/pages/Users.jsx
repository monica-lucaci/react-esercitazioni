import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const api_url = "https://dummyjson.com/users";

const Users = () => {
  const { data, error } = useFetch(api_url, { selector: "users" });

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {data &&
          Array.isArray(data) &&
          data.map((user) => {
            const { id, firstName, lastName, age, gender, username, image } =
              user;
            return (
              <div key={id}>
                <p>User {id}</p>
                <img src={image} />{" "}
                <p>
                  Name: {firstName} {lastName}
                </p>
                <p>UserName: {username}</p>
                <p>
                  {gender},{age} years old
                </p>
                <Link to={`/users/${id}`}>
                  <p>see more...</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Users;
