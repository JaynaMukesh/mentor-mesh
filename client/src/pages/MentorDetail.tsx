import React from 'react';
import { useParams } from 'react-router-dom';
import MentorProfile from '../components/mentorship/MentorProfile';
import { useMentors } from '../hooks/useMentors';

const MentorDetail: React.FC = () => {
  const { mentorId } = useParams<{ mentorId: string }>();
  const { mentor, loading, error } = useMentors(mentorId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading mentor details.</div>;

  return (
    <div className="mentor-detail">
      {mentor ? <MentorProfile mentor={mentor} /> : <div>No mentor found.</div>}
    </div>
  );
};

export default MentorDetail;