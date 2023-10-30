import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const API_URL = "https://dummyjson.com/comments";

const Comments = () => {
  const { data, error } = useFetch(API_URL, { selector: "comments" });


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>body</th>
            <th>postID</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((comment) => {
              const { id, body, postId, user } = comment;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{body}</td>
                  <td>{postId}</td>
                  <td>{user.username}</td>
                  <td>
                    <Link to={`/comments/${id}`}>
                      Click Here!
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
