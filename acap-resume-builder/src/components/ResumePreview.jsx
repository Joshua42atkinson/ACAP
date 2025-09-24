import React, { useState } from 'react';
import { useResumeContext } from '../context/ResumeContext';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';

const ResumePreview = () => {
  const { resumeData } = useResumeContext();
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'classic':
        return <ClassicTemplate resumeData={resumeData} />;
      case 'modern':
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-preview-container">
      <div className="template-selector">
        <h3>Choose Your Template:</h3>
        <button onClick={() => setSelectedTemplate('modern')}>Modern</button>
        <button onClick={() => setSelectedTemplate('classic')}>Classic</button>
        <button onClick={handlePrint} className="print-button">Print / Download PDF</button>
      </div>
      <div className="resume-preview">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
