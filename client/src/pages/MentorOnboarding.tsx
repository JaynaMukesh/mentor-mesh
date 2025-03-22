import React, { useState } from 'react';
import { Icons } from '../components/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';


type Props = {
  onSubmit: (mentorData: {
    name: string;
    skills: string[];
    pricePerSession: number;
    level: string;
    timeSlots: string[];
    meetingLink: string;
  }) => void;
};

export const MentorOnboarding: React.FC<Props> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    skills: [] as string[],
    pricePerSession: 0,
    level: '',
    timeSlots: [] as string[],
    meetingLink: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Set Up Your Mentor Profile</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['React', 'PHP', 'DSA', 'Python', 'AI/ML'].map((skill) => (
                <label
                  key={skill}
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.skills.includes(skill)}
                    onChange={(e) => {
                      const newSkills = e.target.checked
                        ? [...formData.skills, skill]
                        : formData.skills.filter((s) => s !== skill);
                      setFormData({ ...formData, skills: newSkills });
                    }}
                  />
                  <span className="ml-2">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teaching Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['Beginner', 'Intermediate', 'Expert'].map((level) => (
                <label
                  key={level}
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="level"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    checked={formData.level === level}
                    onChange={() => setFormData({ ...formData, level })}
                  />
                  <span className="ml-2">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price per Session
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icons.DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="price"
                  min="0"
                  value={formData.pricePerSession}
                  onChange={(e) => setFormData({ ...formData, pricePerSession: Number(e.target.value) })}
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="meetingLink" className="block text-sm font-medium text-gray-700 mb-2">
                Meeting Link
              </label>
              <input
                type="url"
                id="meetingLink"
                value={formData.meetingLink}
                onChange={(e) => setFormData({ ...formData, meetingLink: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="https://meet.google.com/..."
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Available Time Slots
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                '9:00 AM - 10:00 AM',
                '10:00 AM - 11:00 AM',
                '11:00 AM - 12:00 PM',
                '2:00 PM - 3:00 PM',
                '3:00 PM - 4:00 PM',
                '4:00 PM - 5:00 PM',
              ].map((slot) => (
                <label
                  key={slot}
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={formData.timeSlots.includes(slot)}
                    onChange={(e) => {
                      const newSlots = e.target.checked
                        ? [...formData.timeSlots, slot]
                        : formData.timeSlots.filter((s) => s !== slot);
                      setFormData({ ...formData, timeSlots: newSlots });
                    }}
                  />
                  <span className="ml-2 flex items-center">
                    <Icons.Clock className="h-4 w-4 mr-1" />
                    {slot}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={() => {navigate(ROUTES.mentorDashboard)}}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MentorOnboarding;