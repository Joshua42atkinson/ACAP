import React, { useState } from 'react';

const ResumeAutopsy = () => {
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
    </div>
  );
};

export default ResumeAutopsy;
