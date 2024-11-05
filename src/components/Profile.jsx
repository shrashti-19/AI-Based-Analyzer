// src/components/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      alert("Profile updated!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleInputChange}
        placeholder="Name"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        placeholder="Password"
        className="border p-2 rounded w-full mb-2"
      />
      <button onClick={handleSave} className="bg-blue-500 text-white p-4 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
