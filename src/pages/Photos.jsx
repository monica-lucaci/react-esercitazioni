import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [tbody, setTbody] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1000);
  const [loading, setLoading] = useState(false);

  const getTotalPages = () => {
    return photos?.length > 0 ? Math.ceil(photos.length / limit) : 0;
  };

  const changePage = (mode) => {
    if (mode.toUpperCase() == "PREV") setPage((page) => page - 1);
    else if (mode.toUpperCase() == "NEXT") setPage((page) => page + 1);
  };

  const updateUI = () => {
    if (Array.isArray(photos)) {
      const startIndex = limit * (page - 1);
      setTbody([...photos].splice(startIndex, limit));
    }
  };

  const FetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      if (response.ok) {
        setPhotos(result);
        setLoading(false);
      } else {
        throw new Error("internal error");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchPhotos();
  }, []);

  useEffect(() => {
    updateUI();
  }, [photos, page]);

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <div>
        <button disabled={page == 1} onClick={() => changePage("PREV")}>
          PREV
        </button>
        <span>
          {" "}
          page {page} of {getTotalPages()}
        </span>
        <button
          disabled={page == getTotalPages()}
          onClick={() => changePage("NEXT")}
        >
          NEXT
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>albumId</th>
              <th>id</th>
              <th>title</th>
              <th>url</th>
              <th>thumbnailUrl</th>
            </tr>
          </thead>
          <tbody>
            {tbody &&
              tbody.length > 0 &&
              tbody.map((item) => {
                const { albumID, id, title, url, thumbnailUrl } = item;
                return (
                  <tr key={id}>
                    <td>{albumID}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      <img style={{ width: "50px" }} src={url} />
                    </td>
                    <td>
                      <img style={{ width: "50px" }} src={thumbnailUrl} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Photos;
