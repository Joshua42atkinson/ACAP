import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';
import { module1Content } from '../chapters/module1';

// Import activity components
import ResumeAutopsy from '../components/activities/ResumeAutopsy';
import JobDescriptionAnalysis from '../components/activities/JobDescriptionAnalysis';
import ExperienceInventory from '../components/activities/ExperienceInventory';
import TailoringSimulation from '../components/activities/TailoringSimulation';
import PeerReview from '../components/activities/PeerReview';

// Map activity names from content file to actual components
const activityMap = {
  ResumeAutopsy: ResumeAutopsy,
  JobDescriptionAnalysis: JobDescriptionAnalysis,
  ExperienceInventory: ExperienceInventory,
  TailoringSimulation: TailoringSimulation,
  PeerReview: PeerReview,
};

const Chapter = () => {
  const { chapterId } = useParams();
  const chapterData = module1Content[chapterId];

  if (!chapterData) {
    return <div>Chapter not found.</div>;
  }

  const ActivityComponent = activityMap[chapterData.activity];

  return (
    <div>
      <h2>{chapterData.title}</h2>
      <ChatWindow script={chapterData.script} />
      {ActivityComponent && <ActivityComponent />}
    </div>
  );
};

export default Chapter;
