import React, { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ResumePreview from './ResumePreview';
import AIAssistant from './AIAssistant';
import { ResumeContext } from '../context/ResumeContext';
import { AppContext } from '../context/AppContext';

const ChapterLayout = () => {
  const { chapterId } = useParams();
  const { resumeData, saveResumeToSupabase, isSaving } = useContext(ResumeContext);
  const { aiMode } = useContext(AppContext);
  const themeClass = `chapter-theme-${chapterId}`;

  return (
    <div className={`App ${themeClass}`}>
      <header className="App-header">
        <h1>The Great Recycler</h1>
        <button onClick={saveResumeToSupabase} className="save-button" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save to Cloud'}
        </button>
      </header>
      <main className="App-main">
        <div className="chat-panel">
          <Outlet />
          {aiMode && <AIAssistant resumeData={resumeData} />}
        </div>
        <div className="resume-panel">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
};

export default ChapterLayout;
