import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="flex items-center">
        <img src={logo} alt="Mentor Match Logo" className="h-10" />
        <h1 className="ml-2 text-xl font-bold">Mentor Match</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/mentors" className="hover:underline">Mentors</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/profile" className="hover:underline">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export {Header};