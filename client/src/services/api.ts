import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchMentors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mentors`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching mentors: ' + error.message);
  }
};

export const fetchMentorById = async (mentorId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mentors/${mentorId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching mentor: ' + error.message);
  }
};

export const createSession = async (sessionData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/sessions`, sessionData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating session: ' + error.message);
  }
};