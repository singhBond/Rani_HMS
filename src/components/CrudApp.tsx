import React, { useState, useEffect } from "react";
import { getPost, createPost, updatePost, deletePost } from "../services/api";
import { error } from "console";

// Define the Post interface
interface post {
  id: number;
  title: string;
  body: string;
}

function CrudApp() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editingPost, setEditingPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch post when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch all posts
  const fetchPosts = () => {
    setLoading(true);
    getPost()
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  };

  // Handle form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  //  Handle create new post
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingPost) {
      updatePost(editingPost.id, newPost).then(() => {
        fetchPosts();
        setNewPost({ title: "", body: "" });
        setEditingPost(null);
      });
    } else {
      createPost(newPost).then(() => {
        fetchPosts();
        setNewPost({ title: "", body: "" });
      });
    }
  };

  // Handle delete post
  const handleDelete = (id) => {
    deletePost(id).then(() => {
      fetchPosts();
    });
  };

  // Handle edit post
  const handleEdit = (post) => {
    setEditingPost(post);
    setNewPost(post);
  };
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Crud App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          placeholder="Body"
          value={newPost.body}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          {" "}
          {editingPost ? "Update Post" : "Create Post"}{" "}
        </button>
      </form>

      <ul>
        {posts.map((post) =>(
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
