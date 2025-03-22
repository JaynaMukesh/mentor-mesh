import React, { useState, useEffect } from 'react';
import MentorList from '../components/mentorship/MentorList';
import { useMentors } from '../hooks/useMentors';

const MentorSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { mentors, fetchMentors } = useMentors();

  useEffect(() => {
    fetchMentors();
  }, [fetchMentors]);

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search for Mentors</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <MentorList mentors={filteredMentors} />
    </div>
  );
};

export default MentorSearch;