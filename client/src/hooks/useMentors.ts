import { useEffect, useState } from 'react';
import { Mentor } from '../types/mentor';
import { fetchMentors } from '../services/api';

const useMentors = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMentors = async () => {
      try {
        const data = await fetchMentors();
        setMentors(data);
      } catch (err) {
        setError('Failed to load mentors');
      } finally {
        setLoading(false);
      }
    };

    loadMentors();
  }, []);

  return { mentors, loading, error };
};

export {useMentors};