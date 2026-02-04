import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddModelPage from './pages/AddModelPage';
import AssignModels from './pages/AssignModels';
import DashboardPage from './pages/DashboardPage';
import EditModel from './pages/EditModel';
import LoginPage from './pages/LoginPage';
import UserList from './pages/UserList';

const App = () => {
  const isAuthenticated = localStorage.getItem('adminAuth');

  return (
    <Router>
      <Routes>
        <Route path="/admin/edit/:id" element={<EditModel />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />} />
        <Route path="/add-model" element={isAuthenticated ? <AddModelPage /> : <Navigate to="/" />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/assign/:id" element={<AssignModels />} />
      </Routes>
    </Router>
  );
};

export default App;

