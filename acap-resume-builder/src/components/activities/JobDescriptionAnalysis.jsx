import React, { useState, useMemo } from 'react';

const JobDescriptionAnalysis = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [highlights, setHighlights] = useState({
    hardSkills: [],
    softSkills: [],
    keyDuties: [],
  });

  const handleHighlight = (category) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const selectedText = selection.toString().trim();

    if (selectedText && !highlights[category].includes(selectedText)) {
      setHighlights(prev => ({
        ...prev,
        [category]: [...prev[category], selectedText]
      }));
    }
  };

  const highlightedPreview = useMemo(() => {
    let html = jobDescription.replace(/\n/g, '<br />');
    const allHighlights = [
      ...highlights.hardSkills.map(s => ({ text: s, color: 'yellow' })),
      ...highlights.softSkills.map(s => ({ text: s, color: 'lightblue' })),
      ...highlights.keyDuties.map(s => ({ text: s, color: 'lightgreen' })),
    ];

    allHighlights.forEach(h => {
      const escapedText = h.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedText, 'g');
      html = html.replace(regex, `<span style="background-color: ${h.color};">${h.text}</span>`);
    });

    return { __html: html };
  }, [jobDescription, highlights]);

  return (
    <div className="job-description-analysis">
      <h3>Deconstruct the Job Description</h3>
      <p>Paste the full text of a job description you're interested in below. Then, use the highlighters to identify the key skills and responsibilities.</p>

      <textarea
        id="job-desc-textarea"
        style={{ width: '100%', minHeight: '250px', marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        placeholder="Paste job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <div className="highlighter-buttons" style={{ margin: '10px 0' }}>
        <p>Select text in the box above, then click a button to highlight:</p>
        <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={() => handleHighlight('hardSkills')}>Hard Skill</button>
        <button style={{ backgroundColor: 'lightblue', marginRight: '10px' }} onClick={() => handleHighlight('softSkills')}>Soft Skill</button>
        <button style={{ backgroundColor: 'lightgreen' }} onClick={() => handleHighlight('keyDuties')}>Key Duty</button>
      </div>

      <div className="highlight-lists" style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div>
          <h4>Hard Skills</h4>
          <ul>{highlights.hardSkills.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h4>Soft Skills</h4>
          <ul>{highlights.softSkills.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h4>Key Duties</h4>
          <ul>{highlights.keyDuties.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>

      <div className="highlighted-text-preview" style={{ marginTop: '20px', border: '1px solid #eee', padding: '10px' }}>
        <h4>Highlighted Preview:</h4>
        <div dangerouslySetInnerHTML={highlightedPreview} />
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Yin (Emotional Support) - Community Forum Prompt */}
      <div className="community-prompt" style={{ marginTop: '20px' }}>
        <h3>Community Connection</h3>
        <p><strong>Forum Prompt:</strong> "Share one 'soft skill' you highlighted in your job description. Then, share a brief example of a time you used that skill, even if it wasn't in a formal job. The goal is to see that we all have these skills from many parts of our lives."</p>
        <textarea
          style={{ width: '100%', minHeight: '100px', marginTop: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          placeholder="Share your example with the community..."
        />
      </div>
    </div>
  );
};

export default JobDescriptionAnalysis;
