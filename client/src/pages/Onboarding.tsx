import React from 'react';
import { Icons } from '../components/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

type Props = {
  onRoleSelect: (role: 'student' | 'mentor') => void;
};

export const Onboarding: React.FC<Props> = ({ onRoleSelect }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Welcome to EduChain</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to={ROUTES.studentOnboarding}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-200"
          >
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Icons.GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Join as Student</h2>
              <p className="text-gray-600 text-center">
                Find expert mentors and accelerate your learning journey
              </p>
            </div>
          </Link>

          <Link to={ROUTES.mentorOnboarding}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-200"
          >
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Icons.Users className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Join as Mentor</h2>
              <p className="text-gray-600 text-center">
                Share your expertise and help others grow
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;