import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/users";

const Users = () => {
  const [data, setData] = useState([]);
  const [tbody, setTbody] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const changePage = (mode) => {
    if (mode.toUpperCase() == "NEXT") {
      setPage((page) => page + 1);
    } else if (mode.toUpperCase() == "PREV") {
      setPage((page) => page - 1);
    }
  };

  const getTotalPages = () => {
    return data?.length > 0 ? Math.ceil(data.length / limit) : 0;
  };

  const updateUi = () => {
    if(Array.isArray(data)){
        const startIndex = limit*(page-1);
        setTbody([...data].splice(startIndex,limit));
    }
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(API_URL);
      const result = (await response.json()).users;
      if (response.ok) {
        setData(result);
        setIsLoading(false);
      } else {
        throw new Error("internal Error");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    updateUi();
  },[data,page])

if(isLoading){
    return <h1>loading...</h1>
}

  return (
    <>
      <h2>Users</h2>

      <div>
        <button disabled={page == 1} onClick={() => changePage("PREV")}>
          Prev
        </button>
        <span>
          page{page} of {getTotalPages()}
        </span>
        <button
          disabled={page == getTotalPages()}
          onClick={() => changePage("NEXT")}
        >
          Next
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>age</th>
            <th>gender</th>
            <th>email</th>
            <th>username</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.length > 0 &&
            tbody.map((item) => {
              const {
                id,
                firstName,
                lastName,
                age,
                gender,
                email,
                username,
                image,
              } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>{email}</td>
                  <td>{username}</td>
                  <td>
                    <img style={{ height: "100px" }} src={image} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
