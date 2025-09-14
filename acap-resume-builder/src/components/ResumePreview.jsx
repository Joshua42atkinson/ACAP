import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const ResumePreview = () => {
  const { resumeData } = useContext(ResumeContext);
  const { personalInfo, experience, education, skills } = resumeData;
  const [summary, setSummary] = useState('');

  const generateSummary = () => {
    const latestJob = experience[0]?.jobTitle || 'a challenging role';
    const topSkill = skills[0] || 'a variety of skills';
    const latestDegree = education[0]?.degree || 'a solid educational background';

    const narrative = `I am a motivated individual with a passion for learning and growth. My experience as a ${latestJob} and my ${latestDegree} have equipped me with ${topSkill} and a strong work ethic. I am eager to contribute to a dynamic team and take on new challenges.`;
    setSummary(narrative);
  };

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <button onClick={generateSummary}>Generate Interview Summary</button>
      {summary && (
        <div className="summary-preview section-preview">
          <h4>Your Narrative Summary</h4>
          <p>{summary}</p>
        </div>
      )}

      <div className="personal-info-preview section-preview">
        <h3>{personalInfo.name || 'Your Name'}</h3>
        <p>{personalInfo.email || 'your.email@example.com'}</p>
        <p>{personalInfo.phone || '123-456-7890'}</p>
        <p>{personalInfo.address || 'Your Address, City, State'}</p>
      </div>

      <div className="experience-preview section-preview">
        <h4>Work Experience</h4>
        {experience.map((exp, index) => (
          <div key={index} className="item-preview">
            <h5>{exp.jobTitle || 'Job Title'}</h5>
            <h6>{exp.company || 'Company'} - {exp.location || 'Location'}</h6>
            <p>{exp.startDate || 'Start Date'} - {exp.endDate || 'End Date'}</p>
            <p>{exp.description || 'Job description goes here.'}</p>
          </div>
        ))}
      </div>

      <div className="education-preview section-preview">
        <h4>Education</h4>
        {education.map((edu, index) => (
          <div key={index} className="item-preview">
            <h5>{edu.degree || 'Degree'}</h5>
            <h6>{edu.school || 'School'} - {edu.location || 'Location'}</h6>
            <p>{edu.graduationYear || 'Graduation Year'}</p>
          </div>
        ))}
      </div>

      <div className="skills-preview section-preview">
        <h4>Skills</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill || 'A skill'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumePreview;
