import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Mentor Match Logo" className="h-10" />
          <nav>
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            <Link to="/dashboard" className="ml-4 text-blue-500 hover:underline">Dashboard</Link>
          </nav>
        </div>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to Mentor Match</h1>
        <p className="mt-4 text-lg text-center">
          A web3 and AI powered platform for connecting students with mentors.
        </p>
        <Link to="/mentor-search" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Find a Mentor
        </Link>
      </main>
      <footer className="w-full p-4 bg-white shadow-md mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Mentor Match. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;