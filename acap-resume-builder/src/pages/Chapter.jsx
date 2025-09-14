import React from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';

const Chapter = () => {
  const { chapterId } = useParams();

  // In the future, the ChatWindow will receive chapter-specific props
  // to load the correct conversation script.

  return (
    <div>
      <ChatWindow />
    </div>
  );
};

export default Chapter;
