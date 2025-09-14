import React, { useContext, useState } from 'react';
import { ResumeContext } from '../context/ResumeContext';

// Check for browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;
if (recognition) {
  recognition.continuous = true;
  recognition.interimResults = true;
}

const ResumeForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [isRecording, setIsRecording] = useState(null); // Use index to track which description is recording

  const handleSpeech = (index) => {
    if (isRecording === index) {
      recognition.stop();
      setIsRecording(null);
      return;
    }

    if (!recognition) {
      alert("Sorry, your browser doesn't support speech recognition.");
      return;
    }

    setIsRecording(index);
    recognition.start();

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      if (finalTranscript) {
        const list = [...resumeData.experience];
        const currentDescription = list[index].description || '';
        list[index].description = currentDescription + (currentDescription ? ' ' : '') + finalTranscript.trim();
        setResumeData((prevData) => ({ ...prevData, experience: list }));
      }
    };

    recognition.onend = () => {
        setIsRecording(null);
    };
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, personalInfo: { ...prevData.personalInfo, [name]: value } }));
  };

  const handleSectionChange = (section, index, e) => {
    const { name, value } = e.target;
    const list = [...resumeData[section]];
    list[index][name] = value;
    setResumeData((prevData) => ({ ...prevData, [section]: list }));
  };

  const addSectionItem = (section, item) => {
    setResumeData((prevData) => ({ ...prevData, [section]: [...prevData[section], item] }));
  };

  const removeSectionItem = (section, index) => {
    const list = [...resumeData[section]];
    list.splice(index, 1);
    setResumeData((prevData) => ({ ...prevData, [section]: list }));
  };

  const handleSkillChange = (index, e) => {
    const { value } = e.target;
    const list = [...resumeData.skills];
    list[index] = value;
    setResumeData((prevData) => ({ ...prevData, skills: list }));
  };

  const addSkill = () => {
    setResumeData((prevData) => ({ ...prevData, skills: [...prevData.skills, ''] }));
  };

  const removeSkill = (index) => {
    const list = [...resumeData.skills];
    list.splice(index, 1);
    setResumeData((prevData) => ({ ...prevData, skills: list }));
  };

  return (
    <div className="resume-form">
      <form>
        <h2>Personal Information</h2>
        <div className="form-section">
          <input type="text" name="name" placeholder="Full Name" value={resumeData.personalInfo.name} onChange={handlePersonalInfoChange} />
          <input type="email" name="email" placeholder="Email" value={resumeData.personalInfo.email} onChange={handlePersonalInfoChange} />
          <input type="tel" name="phone" placeholder="Phone" value={resumeData.personalInfo.phone} onChange={handlePersonalInfoChange} />
          <input type="text" name="address" placeholder="Address" value={resumeData.personalInfo.address} onChange={handlePersonalInfoChange} />
        </div>

        <h2>Work Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="form-section">
            <input type="text" name="jobTitle" placeholder="Job Title" value={exp.jobTitle} onChange={(e) => handleSectionChange('experience', index, e)} />
            <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleSectionChange('experience', index, e)} />
            <input type="text" name="location" placeholder="Location" value={exp.location} onChange={(e) => handleSectionChange('experience', index, e)} />
            <input type="text" name="startDate" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleSectionChange('experience', index, e)} />
            <input type="text" name="endDate" placeholder="End Date" value={exp.endDate} onChange={(e) => handleSectionChange('experience', index, e)} />
            <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleSectionChange('experience', index, e)} />
            <button type="button" onClick={() => handleSpeech(index)} disabled={!recognition}>
              {isRecording === index ? '🛑 Stop Recording' : '🎤 Tell Me About This Role'}
            </button>
            <button type="button" onClick={() => removeSectionItem('experience', index)}>Remove This Experience</button>
          </div>
        ))}
        <button type="button" onClick={() => addSectionItem('experience', { jobTitle: '', company: '', location: '', startDate: '', endDate: '', description: '' })}>Add Another Experience</button>

        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="form-section">
            <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleSectionChange('education', index, e)} />
            <input type="text" name="school" placeholder="School" value={edu.school} onChange={(e) => handleSectionChange('education', index, e)} />
            <input type="text" name="location" placeholder="Location" value={edu.location} onChange={(e) => handleSectionChange('education', index, e)} />
            <input type="text" name="graduationYear" placeholder="Graduation Year" value={edu.graduationYear} onChange={(e) => handleSectionChange('education', index, e)} />
            <button type="button" onClick={() => removeSectionItem('education', index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addSectionItem('education', { degree: '', school: '', location: '', graduationYear: '' })}>Add Education</button>

        <h2>Skills</h2>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="form-section">
            <input type="text" name="skill" placeholder="Skill" value={skill} onChange={(e) => handleSkillChange(index, e)} />
            <button type="button" onClick={() => removeSkill(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addSkill}>Add Skill</button>
      </form>
    </div>
  );
};

export default ResumeForm;
