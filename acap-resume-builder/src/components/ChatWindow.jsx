import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ script }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (script && script.length > 0) {
      // Initialize with the first message from the script
      setMessages([{ text: script[0].text, sender: 'ai' }]);
      setCurrentMessageIndex(1);
    }
  }, [script]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage = { text: userInput, sender: 'user' };
    const newMessages = [...messages, newUserMessage];

    // For now, let's just advance the script
    if (script && currentMessageIndex < script.length) {
      newMessages.push({ text: script[currentMessageIndex].text, sender: 'ai' });
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
        // End of script
        newMessages.push({ text: "I have no further instructions. We can implement the activity now.", sender: 'ai' });
    }

    setMessages(newMessages);
    setUserInput('');
  };

  if (!script) {
    return <div>Loading chat...</div>;
  }

  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your response..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;