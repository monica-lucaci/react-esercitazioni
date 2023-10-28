import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/posts";

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = (await response.json()).posts;
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>userId</th>
            <th>tags</th>
            <th>reactions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((post) => {
              const { id, title, body, userId, tags, reactions } = post;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>{userId}</td>
                  <td>{tags.length}</td>
                  <td>{reactions}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
