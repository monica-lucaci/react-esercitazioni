import React from 'react'
import { useFetch } from '../hooks/useFetch';

const Posts = () => {

    const { data: posts, error } = useFetch("https://dummyjson.com/posts", {
    selector: "posts",
  });

  return (
    <div>
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
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              const { id, title, body, userId, tags, reactions } = post;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>{userId}</td>
                  <td>{tags.join(",")}</td>
                  <td>{reactions}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>

  )
}

export default Posts