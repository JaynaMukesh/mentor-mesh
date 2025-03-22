import React from 'react';
import MentorCard from './MentorCard';
import { Mentor } from '../../types/mentor';

interface MentorListProps {
  mentors: Mentor[];
}

const MentorList: React.FC<MentorListProps> = ({ mentors }) => {
  return (
    <div className="mentor-list">
      {mentors.length > 0 ? (
        mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))
      ) : (
        <p>No mentors available at the moment.</p>
      )}
    </div>
  );
};

export default MentorList;