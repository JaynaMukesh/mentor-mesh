import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p className="mt-2">Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Bio: A passionate learner and mentor in the web3 space.</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Mentorship Details</h2>
        <p className="mt-2">Mentor since: January 2022</p>
        <p>Skills: JavaScript, React, Blockchain</p>
      </div>
    </div>
  );
};

export default Profile;