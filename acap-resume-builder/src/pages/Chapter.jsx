import React from 'react';
import ChatWindow from '../components/ChatWindow';

const Chapter = () => {
  // const { chapterId } = useParams(); // This will be used in the future

  // In the future, the ChatWindow will receive chapter-specific props
  // to load the correct conversation script.

  return (
    <div>
      <ChatWindow />
    </div>
  );
};

export default Chapter;
