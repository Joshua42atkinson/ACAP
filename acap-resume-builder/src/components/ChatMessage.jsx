import React from 'react';

const ChatMessage = ({ message }) => {
  const { text, sender } = message;
  const messageClass = sender === 'ai' ? 'ai-message' : 'user-message';

  return (
    <div className={`chat-message ${messageClass}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
