import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { supabase } from '../supabaseClient';

const GameChatWindow = ({ script, onUserInput, onAdvanceStory }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isWaitingForInput, setIsWaitingForInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAIAssistance = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-assist', {
        body: { prompt: `Based on the following job description points, write a professional and concise resume description:\n\n${userInput}` },
      });

      if (error) throw error;

      setUserInput(data.text);
    } catch (error) {
      console.error("Error getting AI suggestion:", error);
      setMessages(prevMessages => [...prevMessages, { text: "Sorry, I couldn't get a suggestion at this time.", sender: 'ai' }]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (script && script.length > 0) {
      setMessages([]);
      setCurrentMessageIndex(0);
    }
  }, [script]);

  useEffect(() => {
    if (script && currentMessageIndex < script.length) {
      const currentMessage = script[currentMessageIndex];
      setMessages(prevMessages => [...prevMessages, { text: currentMessage.text, sender: 'ai' }]);
      if (currentMessage.requiresInput) {
        setIsWaitingForInput(true);
      } else {
        setTimeout(() => {
          if (currentMessage.next) {
            onAdvanceStory(currentMessage.next);
          } else {
            setCurrentMessageIndex(currentMessageIndex + 1)
          }
        }, 1000);
      }
    }
  }, [script, currentMessageIndex, onAdvanceStory]);


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, newUserMessage]);

    const currentMessage = script[currentMessageIndex];
    if (currentMessage.requiresInput) {
      onUserInput(currentMessage.key, userInput);
      setIsWaitingForInput(false);
      setUserInput('');

      if (currentMessage.next) {
        onAdvanceStory(currentMessage.next, userInput);
      } else {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }
    }
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
      {isWaitingForInput && (
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your response..."
            autoFocus
          />
          <button type="submit">Send</button>
          {script[currentMessageIndex]?.key === 'description' && (
            <button type="button" onClick={handleAIAssistance} disabled={isLoading}>
              {isLoading ? 'Getting Help...' : 'Get AI Help'}
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default GameChatWindow;