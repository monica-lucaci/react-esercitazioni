import { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/carts";

const Carts = () => {
  const [data, setData] = useState();
  const [tbody, setTbody] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);

  const getTotalPages = () => {
    return data?.length ? Math.ceil(data.length / limit) : 0;
  };

  const changePage = (mode) => {
    if (mode.toUpperCase() == "NEXT") {
      setPage((page) => page + 1);
    } else if (mode.toUpperCase() == "PREV") {
      setPage((page) => page - 1);
    }
  };

  const updateUI = () => {
    if (Array.isArray(data)) {
      const startIndex = limit * (page - 1);
      setTbody([...data].splice(startIndex, limit));
    }
  };
  
  

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = (await response.json()).carts;
      if (response.ok) {
        setData(result);
        // setTbody([...result].splice(0, limit));
        setLoading(false);
      } else {
        throw new Error("error");
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
    updateUI();
  }, [data,page]);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <>
      {/* {data &&data.length >0} */}
      <div>
        <button disabled={page <= 1} onClick={() => changePage("PREV")}>
          prev
        </button>
        <span>
          page {page} of {getTotalPages()}
        </span>
        <button
          disabled={page >= getTotalPages()}
          onClick={() => changePage("NEXT")}
        >
          next
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>products</th>
            <th>total</th>
            <th>discountedTotal</th>
            <th>userId</th>
            <th>totalProducts</th>
            <th>totalQuantity</th>
          </tr>
        </thead>
        <tbody>
          {tbody &&
            tbody.length > 0 &&
            tbody.map((cart) => {
              const {
                id,
                products,
                total,
                discountedTotal,
                userId,
                totalProducts,
                totalQuantity,
              } = cart;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {products.length}
                    {/* {products.map((product) => {
                      const { id, title, price, quantity, total } = product;
                      return (
                        <>
                          <div key={`product-${id}`}>
                            <p>{title}</p>
                          </div>
                        </>
                      );
                    })} */}
                  </td>
                  <td>{total}</td>
                  <td>{discountedTotal}</td>
                  <td>{userId}</td>
                  <td>{totalProducts}</td>
                  <td>{totalQuantity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Carts;
