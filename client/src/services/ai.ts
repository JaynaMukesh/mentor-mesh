import axios from 'axios';

const AI_API_URL = 'https://api.example.com/ai'; // Replace with your actual AI API URL

export const fetchAIResponse = async (input: string): Promise<string> => {
    try {
        const response = await axios.post(`${AI_API_URL}/chat`, { message: input });
        return response.data.reply;
    } catch (error) {
        console.error('Error fetching AI response:', error);
        throw new Error('Failed to fetch AI response');
    }
};

export const matchSkillsWithMentors = async (skills: string[]): Promise<Mentor[]> => {
    try {
        const response = await axios.post(`${AI_API_URL}/match`, { skills });
        return response.data.mentors;
    } catch (error) {
        console.error('Error matching skills with mentors:', error);
        throw new Error('Failed to match skills with mentors');
    }
};