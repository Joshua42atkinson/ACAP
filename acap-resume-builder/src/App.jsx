import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseModules from './pages/CourseModules';
import ResourceHub from './pages/ResourceHub';
import CommunityForum from './pages/CommunityForum';
import Module from './pages/Module';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/modules" element={<CourseModules />} />
        <Route path="/modules/:moduleId" element={<Module />} />
        <Route path="/resources" element={<ResourceHub />} />
        <Route path="/forum" element={<CommunityForum />} />
      </Routes>
    </div>
  );
}

export default App;
