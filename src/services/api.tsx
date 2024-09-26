import axios from "axios";

const api = axios.create({
    baseURL:'https://a00e-115-245-226-37.ngrok-free.app/api/v1/book/prefill',
});

// get all post (READ)  
export const getPost = () => api.get('/posts');

// create a new (POST)
export const createPost = (postData) => api.post('/posts', postData);

// update a post (UPDATE)
export const updatePost = (id, postData) => api.put(`/posts/${id}`, postData);

// delete a post (DELETE)
export const deletePost = (id) => api.delete(`/posts/${id}`);
