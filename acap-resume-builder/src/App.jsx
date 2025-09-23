import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext'; // Commented out: AuthContext.jsx is missing
import { ResumeProvider } from './context/ResumeContext';

import NavBar from './components/NavBar';
import ChapterLayout from './components/ChapterLayout';
import Home from './pages/Home';
import CourseModules from './pages/CourseModules';
import Module from './pages/Module';
import Chapter from './pages/Chapter';
// import Auth from './pages/Auth'; // Commented out: Auth.jsx is missing
import ResourceHub from './pages/ResourceHub';
import CommunityForum from './pages/CommunityForum';

import './App.css';

function App() {
  return (
    // <AuthProvider> // Commented out: AuthProvider is not available
      <ResumeProvider>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<CourseModules />} />
            <Route path="/modules/:moduleId" element={<Module />} />

            {/* The original resume builder is now an activity within the course */}
            <Route path="/resume-builder" element={<ChapterLayout />}>
              <Route index element={<Navigate to="/resume-builder/chapter/1" replace />} />
              <Route path="chapter/:chapterId" element={<Chapter />} />
            </Route>

            <Route path="/resources" element={<ResourceHub />} />
            <Route path="/forum" element={<CommunityForum />} />

            {/* <Route path="/auth" element={<Auth />} /> // Commented out: Auth component is missing */}
          </Routes>
        </main>
      </ResumeProvider>
    // </AuthProvider> // Commented out: AuthProvider is not available
  );
}

export default App;
