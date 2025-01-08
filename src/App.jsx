import  { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import { USERS_API } from './api/endpoints';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(USERS_API)
      .then(response => {
        setUsers(response.data );
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (id, updatedUser ) => {
    setUsers(users.map(user => (user.id === id ? updatedUser  : user)));
  };

  const handleToggleFavorite = (id) => {
    // Logic to handle favorite state can be added here if needed
    console.log(`Toggled favorite for user with id: ${id}`);
  };

  return (
    <div className="m-5 ">
      <h1 className="text-center m-3"><strong>User Profiles</strong></h1>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary  " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-md-4 mb-4">
              <UserCard Card 
                user={user} 
                onDelete={handleDelete} 
                onEdit={handleEdit} 
                onToggleFavorite={handleToggleFavorite} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;