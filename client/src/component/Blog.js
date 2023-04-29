import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Blog.css";

const BlogpostScreen = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setBlogPost(data);
    };

    fetchBlogPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blogpost">
      <h1>{blogPost.title}</h1>
      <h3>{blogPost.author}</h3>
      <p>{blogPost.content}</p>
      <div className="blogpost-buttons">
        <button
          className="blogpost-edit-button"
          onClick={() => navigate(`/edit-post/${id}`)}
        >
          Edit
        </button>
        <button className="blogpost-delete-button" onClick={handleDelete}>
          Delete
        </button>
        <Link to="/" className="home-add-link">
            Go tohomepage
        </Link>
      </div>
    </div>
  );
};

export default BlogpostScreen;
