import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  const apiUrl = 'http://localhost:5000/users';

  // Fetch users on component mount
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  // Create a new user
  const addUser = () => {
    if (name && email) {
      axios.post(apiUrl, { name, email })
        .then(response => {
          setUsers([...users, response.data]);
          setName('');
          setEmail('');
        })
        .catch(error => console.error('Error adding user: ', error));
    }
  };

  // Delete a user
  const deleteUser = (id) => {
    axios.delete(`${apiUrl}/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user: ', error));
  };

  // Update a user
  const updateUser = () => {
    if (name && email && editingUser) {
      axios.put(`${apiUrl}/${editingUser.id}`, { name, email })
        .then(response => {
          setUsers(users.map(user => user.id === editingUser.id ? response.data : user));
          setName('');
          setEmail('');
          setEditingUser(null);
        })
        .catch(error => console.error('Error updating user: ', error));
    }
  };

  // Set user for editing
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingUser(user);
  };

  return (
    <div className="App">
      <h1>CRUD Operations in React</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={editingUser ? updateUser : addUser}>
        {editingUser ? 'Update User' : 'Add User'}
      </button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
