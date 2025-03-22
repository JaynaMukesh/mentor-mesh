import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ConnectWallet } from './components/ConnectWallet';
import { Onboarding } from './components/Onboarding';
import { StudentOnboarding } from './components/StudentOnboarding';
import { MentorOnboarding } from './components/MentorOnboarding';
import { StudentDashboard } from './components/StudentDashboard';
import { MentorDashboard } from './components/MentorDashboard';
import { User } from './types';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [currentStep, setCurrentStep] = useState<'landing' | 'connect' | 'role' | 'onboarding' | 'dashboard'>('landing');

  const handleConnect = () => {
    setIsConnected(true);
    setCurrentStep('role');
  };

  const handleRoleSelect = (role: 'student' | 'mentor') => {
    setUser({ id: '', address: '', name: '', role, meetings: [] });
    setCurrentStep('onboarding');
  };

  const handleStudentOnboarding = (name: string, subject: string) => {
    if (user) {
      setUser({ ...user, name, subject });
      setCurrentStep('dashboard');
    }
  };

  const handleMentorOnboarding = (mentorData: any) => {
    if (user) {
      setUser({ ...user, ...mentorData });
      setCurrentStep('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep === 'landing' && <LandingPage onConnect={() => setCurrentStep('connect')} />}
      {currentStep === 'connect' && <ConnectWallet onConnect={handleConnect} />}
      {currentStep === 'role' && <Onboarding onRoleSelect={handleRoleSelect} />}
      {currentStep === 'onboarding' && user?.role === 'student' && (
        <StudentOnboarding onSubmit={handleStudentOnboarding} />
      )}
      {currentStep === 'onboarding' && user?.role === 'mentor' && (
        <MentorOnboarding onSubmit={handleMentorOnboarding} />
      )}
      {currentStep === 'dashboard' && user?.role === 'student' && <StudentDashboard />}
      {currentStep === 'dashboard' && user?.role === 'mentor' && <MentorDashboard />}
    </div>
  );
}

export default App;