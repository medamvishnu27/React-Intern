import  { useState } from 'react';
import { getAvatarUrl } from '../api/endpoints';


const UserCard = ({ user, onDelete, onEdit, onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser , setEditedUser ] = useState({ ...user });
  const avatarUrl = getAvatarUrl(user.username);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite(user.id);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    onEdit(user.id, editedUser );
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(user.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser ((prevUser ) => ({
      ...prevUser ,
      [name]: value,
    }));
  };

  return (
    <div className="card  shadow-lg ">
      <img src={avatarUrl} alt={user.username} className="card-img-top m-2 "  />
      <div className="card-body">
        {isEditing ? (
          <>
          <label className='mb-1'> Name</label>
            <input
              type="text"
              name="name"
              value={editedUser .name}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <label className='mb-1'>Email</label>
            <input
              type="email"
              name="email"
              value={editedUser .email}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <label className='mb-1'> Phone</label>
            <input
              type="text"
              name="phone"
              value={editedUser .phone}
              onChange={handleInputChange}
              className="form-control mb-2"
            />
            <button className="btn btn-success btn-sm" onClick={handleSaveClick}>
            <span className='mx-2'><i class="bi bi-folder-plus"></i></span>
              Save
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
            <p className="card-text">
              <strong>Address:</strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
            </p>
            <p className="card-text">
              <strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a>
            </p>
            <p className="card-text"><strong>Company:</strong> {user.company.name}</p>
          </>
        )}
        <div className=" d-flex justify-content-evenly mt-3" >
          {/* Favorite Button */}
          <button
            className={`btn btn-lg text-danger ${isFavorite ? '' : ''}`}
            onClick={handleFavoriteClick}
          >
            <i className={`bi bi-heart${isFavorite ? '-fill' : ''}`}></i>
          </button>

          {/* Edit Button */}
          <button
            className={`btn btn-lg text-dark ${isEditing ? '' : ''}`}
            onClick={handleEditClick} id='bi-pencle'
          >
            <i className="bi bi-pencil"></i>
          </button>

          {/* Delete Button */}
          <button className="btn btn-lg " onClick={handleDeleteClick}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;