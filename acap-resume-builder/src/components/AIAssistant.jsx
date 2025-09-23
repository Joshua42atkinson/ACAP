import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const formatResumeDataForPrompt = (data) => {
  let prompt = "Personal Information:\n";
  prompt += `Name: ${data.personalInfo.name}\n`;
  prompt += `Email: ${data.personalInfo.email}\n`;
  prompt += `Phone: ${data.personalInfo.phone}\n`;
  prompt += `Address: ${data.personalInfo.address}\n\n`;

  prompt += "Experience:\n";
  data.experience.forEach(exp => {
    prompt += `- ${exp.jobTitle} at ${exp.company}, ${exp.location} (${exp.startDate} - ${exp.endDate})\n`;
    prompt += `  Description: ${exp.description}\n`;
  });

  prompt += "\nEducation:\n";
  data.education.forEach(edu => {
    prompt += `- ${edu.degree} from ${edu.school}, ${edu.location} (Graduated: ${edu.graduationYear})\n`;
  });

  prompt += "\nSkills:\n";
  prompt += data.skills.join(', ');

  return prompt;
};

const AIAssistant = ({ resumeData }) => {
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSuggestion = async () => {
    setIsLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const formattedResume = formatResumeDataForPrompt(resumeData);
      const prompt = `Based on the following resume, please provide a concise and actionable suggestion for improvement:\n\n${formattedResume}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      setAiSuggestion(text);
    } catch (error) {
      console.error("Error getting AI suggestion:", error);
      setAiSuggestion("Sorry, I couldn't get a suggestion at this time.");
    }
    setIsLoading(false);
  };

  return (
    <div className="ai-assistant">
      <h3>AI Resume Assistant</h3>
      <button onClick={handleGetSuggestion} disabled={isLoading}>
        {isLoading ? 'Getting Suggestion...' : 'Get AI Suggestion'}
      </button>
      {aiSuggestion && (
        <div className="ai-suggestion">
          <h4>Suggestion:</h4>
          <p>{aiSuggestion}</p>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
