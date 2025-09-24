import React, { useState, useEffect } from 'react';
import GameChatWindow from '../game/GameChatWindow';
import { story } from '../game/Story';
import { useResumeContext } from '../context/ResumeContext';

const Game = () => {
  const [currentStage, setCurrentStage] = useState('introduction');
  const [script, setScript] = useState([]);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [educationIndex, setEducationIndex] = useState(0);
  const { updateResumeData, addResumeEntry, resumeData } = useResumeContext();

  useEffect(() => {
    setScript(story[currentStage].script);
  }, [currentStage]);

  useEffect(() => {
    if (resumeData.experience.length > experienceIndex + 1) {
      setExperienceIndex(resumeData.experience.length - 1);
    }
  }, [resumeData.experience, experienceIndex]);

  useEffect(() => {
    if (resumeData.education.length > educationIndex + 1) {
      setEducationIndex(resumeData.education.length - 1);
    }
  }, [resumeData.education, educationIndex]);

  const handleUserInput = (key, value) => {
    const stage = story[currentStage];
    if (stage.logic) {
      const nextStage = stage.logic(value);
      advanceStory(nextStage, value);
    } else if (stage.section) {
      const index = stage.section === 'experience' ? experienceIndex : educationIndex;
      updateResumeData(stage.section, index, key, value);
    }
  };

  const advanceStory = (nextStage, userInput) => {
    if (nextStage) {
      if (nextStage === 'experience' && userInput.toLowerCase() === 'yes') {
        addResumeEntry('experience');
      } else if (nextStage === 'education' && userInput.toLowerCase() === 'yes') {
        addResumeEntry('education');
      }
      setCurrentStage(nextStage);
    }
  };

  return (
    <div className="game-page">
      <h1>Resume Builder Game</h1>
      <GameChatWindow
        script={script}
        onUserInput={handleUserInput}
        onAdvanceStory={advanceStory}
      />
    </div>
  );
};

export default Game;