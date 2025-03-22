import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MentorSearch from './pages/MentorSearch';
import MentorDetail from './pages/MentorDetail';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
import { Web3Provider } from './context/Web3Context';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Web3Provider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mentor-search" element={<MentorSearch />} />
              <Route path="/mentor/:id" element={<MentorDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </Router>
      </Web3Provider>
    </AuthProvider>
  );
};

export default App;