import React, { useState, useRef } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import StoryMode from './components/StoryMode';
import { ResumeProvider } from './context/ResumeContext';
import './App.css';

function App() {
  const [storyMode, setStoryMode] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(1);

  const toggleStoryMode = () => {
    setStoryMode(!storyMode);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <ResumeProvider>
      <div className="App">
        <header className="App-header">
          <h1>ACAP Resume Builder</h1>
          <div>
            <button onClick={toggleStoryMode}>
              {storyMode ? 'Hide' : 'Show'} Hero's Journey Guide
            </button>
            <button onClick={handlePrint} style={{marginLeft: '10px'}}>
              Print/Download Resume
            </button>
          </div>
        </header>
        <main className="App-main">
          <div className="left-panel">
            {storyMode && (
              <StoryMode
                currentChapter={currentChapter}
                setCurrentChapter={setCurrentChapter}
              />
            )}
            <ResumeForm />
          </div>
          <ResumePreview />
        </main>
      </div>
    </ResumeProvider>
  );
}

export default App;
