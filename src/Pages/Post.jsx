import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Post.css';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <Link to={`/${post.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
