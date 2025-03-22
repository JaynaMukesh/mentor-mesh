import React, { useState } from 'react';
import { Icons } from '../components/icons';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const subjects = [
  { id: 'react', name: 'React', icon: Icons.Code2 },
  { id: 'php', name: 'PHP', icon: Icons.FileCode2 },
  { id: 'dsa', name: 'DSA', icon: Icons.Binary },
  { id: 'python', name: 'Python', icon: Icons.Database },
  { id: 'ai', name: 'AI/ML', icon: Icons.BrainCircuit },
] as const;

type Props = {
  onSubmit: (name: string, subject: string) => void;
};

export const StudentOnboarding: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && selectedSubject) {
      onSubmit(name, selectedSubject);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Tell us about yourself</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Choose your subject</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {subjects.map((subject) => {
                const Icon = subject.icon;
                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => setSelectedSubject(subject.id)}
                    className={`p-4 rounded-xl border-2 transition duration-200 ${selectedSubject === subject.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                      }`}
                  >
                    <div className="flex flex-col items-center">
                      <Icon className="w-8 h-8 mb-2 text-indigo-600" />
                      <span className="font-medium">{subject.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
          onClick={() => {navigate(ROUTES.studentDashboard)}}
            type="submit"
            disabled={!name || !selectedSubject}
            className="mt-8 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentOnboarding;