import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css"

const HomeScreen = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/posts");
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="home">
      <div className="home-header">
        <h1>Blog Posts</h1>
        <Link to="/blog" className="home-add-link">
          Create new blog
        </Link>
      </div>
      <div className="home-blogposts">
        {blogPosts.map((blogPost) => (
          <Link
            to={`/blogpost/${blogPost._id}`}
            key={blogPost._id}
            className="home-blogpost-card"
          >
            <h2>{blogPost.title}</h2>
            <p>{blogPost.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
