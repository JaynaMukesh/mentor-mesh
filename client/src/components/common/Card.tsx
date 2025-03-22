import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {imageUrl && <img src={imageUrl} alt={title} className="rounded-t-lg" />}
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-700 mt-1">{content}</p>
    </div>
  );
};

export default Card;