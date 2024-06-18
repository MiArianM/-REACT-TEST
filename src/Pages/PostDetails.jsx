import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Post not found");
        }
      })
      .then((data) => setPost(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => Navigate(-1)}>Back to Posts</button>
    </div>
  );
};

export default PostDetails;
