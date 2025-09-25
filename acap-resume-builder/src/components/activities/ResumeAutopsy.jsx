import React, { useState } from 'react';
import Content from '../Content';
import { module1Content } from '../../chapters/module1';

const ResumeAutopsy = () => {
  const activityData = module1Content[1];
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        setResumeText(text);
        analyzeText(text);
      };
      // For now, we only support .txt files for simplicity.
      // A production version would need to handle .pdf, .docx, etc.
      reader.readAsText(file);
    }
  };

  const analyzeText = (text) => {
    const wordCount = text.trim().split(/\s+/).length;
    // Simple keyword analysis - this could be expanded significantly
    const actionVerbs = ['managed', 'led', 'developed', 'created', 'implemented', 'increased', 'decreased'];
    let keywordCount = 0;
    const lowerCaseText = text.toLowerCase();
    actionVerbs.forEach(verb => {
        if(lowerCaseText.includes(verb)){
            keywordCount++;
        }
    });

    setAnalysis({
      wordCount,
      keywordCount,
    });
  };

  return (
    <div className="resume-autopsy">
      <Content content={activityData.content} />
      <h3>Resume Upload & Analysis</h3>
      <p>Upload your resume (.txt format) to begin the analysis.</p>
      <input type="file" accept=".txt" onChange={handleFileChange} />

      {analysis && (
        <div className="analysis-results" style={{ marginTop: '20px' }}>
          <h4>Automated First Impression:</h4>
          <p><strong>Word Count:</strong> {analysis.wordCount}</p>
          <p><strong>Action Verb Keywords:</strong> {analysis.keywordCount} (out of {analysis.actionVerbs.length} common verbs)</p>
        </div>
      )}

      {resumeText && (
        <div className="resume-preview" style={{ marginTop: '20px' }}>
          <h4>Resume Content:</h4>
          <pre style={{ whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '10px', background: '#f9f9f9' }}>
            {resumeText}
          </pre>
        </div>
      )}

      <hr style={{ margin: '2rem 0' }} />

      {/* "Red Pen" Test Section */}
      <div className="red-pen-test" style={{ marginTop: '20px' }}>
        <h3>The "Red Pen" Test</h3>
        <p>Read your resume from the perspective of a hiring manager who has 15 seconds to make a decision. Ask yourself:</p>
        <ul>
          <li>What is the very first thing that catches my eye?</li>
          <li>Can I tell what kind of job you're looking for within 5 seconds?</li>
          <li>Is it easy to see your key accomplishments?</li>
        </ul>
        <p><strong>Your task:</strong> Go through your resume text above. Identify and reflect on statements that are "duties" (e.g., "Responsible for filing reports") versus "accomplishments" (e.g., "Streamlined filing system, saving 3 hours per week"). Use the space below for your notes.</p>
        <textarea
          style={{ width: '100%', minHeight: '150px', marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Jot down your notes and observations here. Which parts are duties? Which are accomplishments?"
        />
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Yin (Emotional Support) - Journal Prompt */}
      <div className="journal-prompt" style={{ marginTop: '20px' }}>
        <h3>Private Journal</h3>
        <p>This resume represents a chapter of your professional life. Before you rewrite it, take a moment to reflect. This is for your eyes only.</p>
        <p><strong>Prompt:</strong> "What are three things on this document I am genuinely proud of? What's one experience listed here that taught me a valuable lesson, even if it was difficult at the time?"</p>
        <textarea
          style={{ width: '100%', minHeight: '150px', marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Write your private thoughts here..."
        />
      </div>
    </div>
  );
};

export default ResumeAutopsy;
