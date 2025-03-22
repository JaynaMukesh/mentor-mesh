import React, { useState } from 'react';

const SkillMatcher: React.FC = () => {
  const [skills, setSkills] = useState<string>('');
  const [matchedMentors, setMatchedMentors] = useState<string[]>([]);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkills(event.target.value);
  };

  const handleMatchMentors = () => {
    // Logic to match mentors based on skills
    // This is a placeholder for the actual matching logic
    const mentors = ['Mentor A', 'Mentor B', 'Mentor C']; // Example mentors
    setMatchedMentors(mentors.filter(mentor => mentor.includes(skills)));
  };

  return (
    <div className="skill-matcher">
      <h2>Find Your Mentor</h2>
      <input
        type="text"
        value={skills}
        onChange={handleSkillChange}
        placeholder="Enter your skills"
        className="input"
      />
      <button onClick={handleMatchMentors} className="button">
        Match Mentors
      </button>
      <div className="mentor-list">
        {matchedMentors.length > 0 ? (
          matchedMentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
              {mentor}
            </div>
          ))
        ) : (
          <p>No mentors found.</p>
        )}
      </div>
    </div>
  );
};

export default SkillMatcher;