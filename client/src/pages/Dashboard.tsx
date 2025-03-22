import React from 'react';
import { MentorList } from '../components/mentorship/MentorList';
import { SessionScheduler } from '../components/mentorship/SessionScheduler';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />
      <main className="main-content">
        <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
        <MentorList />
        <SessionScheduler />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;