import React from 'react';

interface MentorCardProps {
  name: string;
  expertise: string;
  bio: string;
  imageUrl: string;
  onClick: () => void;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, expertise, bio, imageUrl, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={onClick}>
      <img src={imageUrl} alt={`${name}'s profile`} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{expertise}</p>
      <p className="text-gray-500 mt-1">{bio}</p>
    </div>
  );
};

export default MentorCard;