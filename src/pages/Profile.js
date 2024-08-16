// src/pages/Profile.js
import React, { useContext } from 'react';

const Profile = ({ user, onLogout }) => {
  
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add other user details as needed */}
      </div>
      <button
        onClick={onLogout}
        className='mt-4 py-[8px] px-[12px] rounded-[8px] border border-blue-500 shadow-sm hover:shadow-blue-500/50 cursor-pointer'
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
