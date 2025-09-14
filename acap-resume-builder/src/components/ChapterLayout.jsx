import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ResumePreview from './ResumePreview';

const ChapterLayout = () => {
  const { chapterId } = useParams();
  const themeClass = `chapter-theme-${chapterId}`;

  return (
    <div className={`App ${themeClass}`}>
      <header className="App-header">
        <h1>The Great Recycler</h1>
      </header>
      <main className="App-main">
        <div className="chat-panel">
          <Outlet />
        </div>
        <div className="resume-panel">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
};

export default ChapterLayout;
