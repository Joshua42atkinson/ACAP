import React from 'react';

const ChatMessage = ({ message }) => {
  const { text, sender } = message;
  const messageClass = sender === 'ai' ? 'ai-message' : 'user-message';

  const speak = (textToSpeak) => {
    // Stop any currently playing speech to avoid overlap
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    // Optional: configure voice, rate, pitch here
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`chat-message ${messageClass}`}>
      <p>{text}</p>
      {sender === 'ai' && (
        <button onClick={() => speak(text)} className="play-button" title="Read aloud">
          ▶️
        </button>
      )}
    </div>
  );
};

export default ChatMessage;
