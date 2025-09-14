import React from 'react';
import { Outlet } from 'react-router-dom';
import ResumePreview from './ResumePreview';

const ChapterLayout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Great Recycler</h1>
        {/* We can add other header content here if needed */}
      </header>
      <main className="App-main">
        <div className="chat-panel">
          <Outlet /> {/* This will render the specific chapter page */}
        </div>
        <div className="resume-panel">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
};

export default ChapterLayout;
