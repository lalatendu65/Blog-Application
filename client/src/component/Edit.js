import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css"
const EditBlogScreen = () => {
  const { id } = useParams();
  const navigaet = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const[author,setAuthor]=useState("");

  useEffect(() => {
    const fetchBlogPost = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setBlogPost(data);
      setTitle(data.title);
      setContent(data.content);
      setAuthor(data.author);
    };

    fetchBlogPost();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        {
          title,
          content,
          author,
        }
      );
      console.log(response.data);
      navigaet(`/blogpost/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-blog-container">
      <form onSubmit={handleUpdate} className="edit-blog-form">
        <h2>Edit Blog Post</h2>
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
          <label htmlFor="author">Author:</label>
          <textarea
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Author name"
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="edit-btn">
            Update
          </button>

          <button
            onClick={() => navigaet(`/blogpost/${id}`)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogScreen;
