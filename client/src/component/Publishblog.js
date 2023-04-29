import React, { useState } from "react";
import axios from "axios";
import "./Publishblog.css";
import { useNavigate } from "react-router-dom";

const PublishBlogScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuther] = useState("");
  
 const navigaet = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        title,
        content,
        author
      });
      console.log(response.data);
      navigaet("/")

    } catch (error) {
      console.log(error);
      // Display error message
    }
  };
  

  return (
    <div className="publish-blog-form-container">
      <form onSubmit={handleSubmit} className="publish-blog-form">
        <h2 className="form-title">Publish a new blog post</h2>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog post title"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your blog post content"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="auther">Auther:</label>
          <textarea
            id="author"
            value={author}
            onChange={(e) => setAuther(e.target.value)}
            placeholder="Enter Auther name"
            required
          />
        </div>
        <button type="submit" className="publish-btn">
          Publish
        </button>
        <button onClick={() => navigaet("/")} className="publish-btn">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PublishBlogScreen;
