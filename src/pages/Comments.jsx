import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

const Comments = () => {
  const [data, setData] = useState([]);
  const [tbody, setTbody] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);

  const getTotalPages = () => {
    return data?.length > 0 ? Math.ceil(data.length / limit) : 0;
  };

  const changePage = (mode) => {
    if (mode.toUpperCase() == "NEXT") setPage((page) => page + 1);
    else if (mode.toUpperCase() == "PREV") setPage((page) => page - 1);
   
  };

  const updateUi = () => {
    const startIndex = limit * (page - 1);
    if (Array.isArray(data)) {
      setTbody([...data].splice(startIndex, limit));
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      if (response.ok) {
        setData(result);
        setLoading(false);
      }else{
        throw new Error("internal Error")
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateUi();
  }, [data, page]);

  if (loading) {
    return <h2>loading..</h2>;
  }

  return (

    
    <>
      <div>
        <button disabled={page==1} onClick={() => changePage("PREV")}>
          Prev
        </button>
        <span>
          page {page} of {getTotalPages()}
        </span>
        <button
          disabled={page==getTotalPages()}
          onClick={() => changePage("NEXT")}
        >
          Next
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.length > 0 &&
            tbody.map((comment) => {
              const { postId, id, name, email, body } = comment;
              return (
                <tr key={id}>
                  <td>{postId}</td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Comments;
