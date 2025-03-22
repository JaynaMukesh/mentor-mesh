import React from 'react';

interface MentorProfileProps {
  name: string;
  bio: string;
  skills: string[];
  experience: string;
  contact: string;
}

const MentorProfile: React.FC<MentorProfileProps> = ({ name, bio, skills, experience, contact }) => {
  return (
    <div className="mentor-profile">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-2">{bio}</p>
      <h3 className="mt-4 font-semibold">Skills:</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h3 className="mt-4 font-semibold">Experience:</h3>
      <p>{experience}</p>
      <h3 className="mt-4 font-semibold">Contact:</h3>
      <p>{contact}</p>
    </div>
  );
};

export default MentorProfile;