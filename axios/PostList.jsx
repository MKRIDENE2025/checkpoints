import{ useEffect, useState } from "react";
import axios from "axios";
import "./PostList.css"; 

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => setPosts(response.data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p className="error">Une erreur est survenue</p>;
  }

  return (
    <div className="post-list">
      <h2>Liste des Posts :</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
         <h3>📄 {post.title}</h3>
         <p>📝 {post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
