import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import ChapterLayout from './components/ChapterLayout';
import Chapter from './pages/Chapter';
import './App.css';

function App() {
  return (
    <ResumeProvider>
      <Routes>
        <Route path="/" element={<ChapterLayout />}>
          <Route index element={<Navigate to="/chapter/1" replace />} />
          <Route path="chapter/:chapterId" element={<Chapter />} />
        </Route>
      </Routes>
    </ResumeProvider>
  );
}

export default App;
