import React from 'react';
import './ClassicTemplate.css';

const ClassicTemplate = ({ resumeData }) => {
  const { personalInfo, experience, education, skills } = resumeData;

  return (
    <div className="classic-template">
      <header className="classic-header">
        <h1>{personalInfo.name || 'Your Name'}</h1>
        <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.address}</p>
      </header>
      <section className="classic-section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="classic-item">
            <h3>{exp.jobTitle}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
            {exp.achievement && <p><strong>Achievement:</strong> {exp.achievement}</p>}
          </div>
        ))}
      </section>
      <section className="classic-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
            <div key={index} className="classic-item">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
            </div>
        ))}
      </section>
      <section className="classic-section">
        <h2>Skills</h2>
        <ul className="classic-skills-list">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default ClassicTemplate;
