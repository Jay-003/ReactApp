import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = ( { userData } ) => {
  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <p>First Name: { userData.firstName }</p>
      <p>Last Name: { userData.lastName }</p>
      <p>Email: { userData.email }</p>
      <p>Favorite Season: { userData.favoriteSeason }</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Profile;