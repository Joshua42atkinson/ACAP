import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ResumeContext } from '../context/ResumeContext';
import ChatMessage from './ChatMessage';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;
if (recognition) {
  recognition.continuous = true;
  recognition.interimResults = true;
}

const conversationScripts = {
  1: { type: 'linear', script: [ { question: "Welcome! I am the Great Recycler. To start our journey, what is your full name?", field: 'personalInfo.name' }, { question: "A wonderful name. What is your email address?", field: 'personalInfo.email' }, { question: "Thank you. And your phone number?", field: 'personalInfo.phone' }, { question: "Great. Lastly, what is your address?", field: 'personalInfo.address' }, { question: "Perfect! We've set the stage. Click 'Next Chapter' when you're ready.", field: null } ] },
  2: { type: 'loop', section: 'experience', script: [ { question: "Let's talk about a work experience. What was the job title?", field: 'jobTitle' }, { question: "And what was the name of the company?", field: 'company' }, { question: "Can you tell me a little about what you did in that role?", field: 'description' } ], closingQuestion: "Would you like to add another work experience? (yes/no)" },
  3: { type: 'loop', section: 'education', script: [ { question: "Now for your education. What was the degree or certificate you received?", field: 'degree' }, { question: "What was the name of the school or institution?", field: 'school' } ], closingQuestion: "Would you like to add another educational experience? (yes/no)" },
  4: { type: 'loop', section: 'skills', script: [ { question: "Let's list some of your skills. What is one thing you are good at?", field: 'skill' } ], closingQuestion: "Would you like to add another skill? (yes/no)" },
  5: { type: 'linear', script: [{ question: "Reviewing your draft. This is the 'Ordeal' chapter where we bring it all together. Click Next when ready.", field: null }] },
  6: { type: 'linear', script: [{ question: "You now have a powerful draft. This is your 'Reward'. Click Next to continue.", field: null }] },
  7: { type: 'linear', script: [{ question: "This is 'The Road Back', where we refine the message. Click Next to continue.", field: null }] },
  8: { type: 'linear', script: [{ question: "This is 'The Resurrection', where your resume is reborn. Click Next to continue.", field: null }] },
  9: { type: 'linear', script: [{ question: "This is the 'Return with the Elixir'. You are ready! Click Next to continue.", field: null }] },
  10: { type: 'linear', script: [{ question: "This is the Job Search module (Coming Soon). Click Next to continue.", field: null }] },
  11: { type: 'linear', script: [{ question: "This is the Interview Prep module (Coming Soon). Click Next to continue.", field: null }] },
  12: { type: 'linear', script: [{ question: "Congratulations! You have completed the journey.", field: null }] },
};

const ChatWindow = () => {
  const { chapterId } = useParams();
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [chapterConfig, setChapterConfig] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const config = conversationScripts[chapterId] || { type: 'linear', script: [{ question: `Content for chapter ${chapterId} coming soon!`, field: null }] };
    setChapterConfig(config);
    setMessages([{ text: config.script[0].question, sender: 'ai' }]);
    setQuestionIndex(0);
    setItemIndex(config.type === 'loop' ? (resumeData[config.section]?.length || 0) : 0);
    setIsLooping(false);
  }, [chapterId]);

  const handleSpeech = () => {
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
      setIsListening(false);
      return;
    }
    recognition.start();
    setIsListening(true);
    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setUserInput(prev => prev + finalTranscript);
    };
    recognition.onend = () => setIsListening(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const newUserMessage = { text: userInput, sender: 'user' };
    let newMessages = [...messages, newUserMessage];
    if (isLooping) {
        if (userInput.toLowerCase().startsWith('y')) {
            setItemIndex(itemIndex + 1);
            setQuestionIndex(0);
            newMessages.push({ text: chapterConfig.script[0].question, sender: 'ai' });
        } else {
            newMessages.push({ text: "Great! Let's move on. Click 'Next Chapter' when you're ready.", sender: 'ai' });
        }
        setIsLooping(false);
    } else {
        const currentScriptItem = chapterConfig.script[questionIndex];
        if (currentScriptItem.field) {
            const field = currentScriptItem.field;
            if (chapterConfig.type === 'loop') {
                const section = chapterConfig.section;
                const list = [...(resumeData[section] || [])];
                if(section === 'skills'){
                    if(!list[itemIndex]) list[itemIndex] = '';
                    list[itemIndex] = userInput;
                } else {
                    if (!list[itemIndex]) list[itemIndex] = {};
                    list[itemIndex][field] = userInput;
                }
                setResumeData(prev => ({ ...prev, [section]: list }));
            } else {
                const [section, fieldName] = field.split('.');
                setResumeData(prev => ({ ...prev, [section]: { ...prev[section], [fieldName]: userInput } }));
            }
        }
        const nextQuestionIndex = questionIndex + 1;
        if (nextQuestionIndex < chapterConfig.script.length) {
            setQuestionIndex(nextQuestionIndex);
            newMessages.push({ text: chapterConfig.script[nextQuestionIndex].question, sender: 'ai' });
        } else {
            if (chapterConfig.type === 'loop') {
                setIsLooping(true);
                newMessages.push({ text: chapterConfig.closingQuestion, sender: 'ai' });
            } else {
                 newMessages.push({ text: chapterConfig.script[chapterConfig.script.length - 1].question, sender: 'ai' });
            }
        }
    }
    setMessages(newMessages);
    setUserInput('');
  };

  const nextChapterId = parseInt(chapterId, 10) + 1;
  const prevChapterId = parseInt(chapterId, 10) - 1;

  return (
    <div className="chat-window">
      <div className="message-list">{messages.map((msg, index) => (<ChatMessage key={index} message={msg} />))}</div>
      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type or speak your answer..."/>
        <button type="button" onClick={handleSpeech} disabled={!recognition} className="mic-button">{isListening ? '🎙️...' : '🎤'}</button>
        <button type="submit">Send</button>
      </form>
      <nav className="chapter-nav">
        {prevChapterId > 0 && <Link to={`/chapter/${prevChapterId}`}>Previous Chapter</Link>}
        {nextChapterId <= 12 && <Link to={`/chapter/${nextChapterId}`}>Next Chapter</Link>}
      </nav>
    </div>
  );
};

export default ChatWindow;
