import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ResumeProvider } from './context/ResumeContext';

import NavBar from './components/NavBar';
import ChapterLayout from './components/ChapterLayout';
import Home from './pages/Home';
import CourseModules from './pages/CourseModules';
import Module from './pages/Module';
import Chapter from './pages/Chapter';
import Auth from './pages/Auth';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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

              <Route path="/auth" element={<Auth />} />
            </Routes>
          </main>
        </ResumeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
