import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, AppContext } from './context/AppContext';
import { ResumeProvider, ResumeContext } from './context/ResumeContext';

import NavBar from './components/NavBar';
import AIAssistant from './components/AIAssistant';
import ProtectedRoute from './components/ProtectedRoute';
import ChapterLayout from './components/ChapterLayout';
import Home from './pages/Home';
import CourseModules from './pages/CourseModules';
import Module from './pages/Module';
import Chapter from './pages/Chapter';
import Auth from './pages/Auth';
import ResourceHub from './pages/ResourceHub';
import CommunityForum from './pages/CommunityForum';

import './App.css';

function AppContent() {
  const { aiMode } = useContext(AppContext);
  const { resumeData } = useContext(ResumeContext);

  return (
    <>
      <NavBar />
      <main className="container">
        {aiMode && <AIAssistant resumeData={resumeData} />}
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/modules" element={<CourseModules />} />
            <Route path="/modules/:moduleId" element={<Module />} />

            {/* The resume builder is now a protected route */}
            <Route
              path="/resume-builder"
              element={
                <ProtectedRoute>
                  <ChapterLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/resume-builder/chapter/1" replace />} />
              <Route path="chapter/:chapterId" element={<Chapter />} />
            </Route>

            <Route path="/resources" element={<ResourceHub />} />
            <Route path="/forum" element={<CommunityForum />} />

            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
    </>
  );
}

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <ResumeProvider>
          <AppContent />
        </ResumeProvider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
