import React, { useState, useEffect } from 'react';
import Content from '../Content';
import { module1Content } from '../../chapters/module1';

// Placeholder data - in a real app, this would come from context or props
const placeholderOriginalResume = `
## Experience

**Customer Service Rep | Big Box Store | 2019-2022**
- Responsible for answering customer questions
- Handled returns and exchanges
- Stocked shelves during downtime
`;

const placeholderParStatements = [
  { id: 1, text: "Reduced customer wait times by 15% by reorganizing the returns desk." },
  { id: 2, text: "Increased team sales by 10% after training them on a new software." },
];

const placeholderKeywords = ['customer service', 'sales', 'training', 'software'];

const TailoringSimulation = () => {
  const activityData = module1Content[4];
  const [editedText, setEditedText] = useState('');
  const [alignmentScore, setAlignmentScore] = useState(0);

  useEffect(() => {
    // Calculate alignment score
    const lowerCaseText = editedText.toLowerCase();
    let score = 0;
    placeholderKeywords.forEach(keyword => {
      if (lowerCaseText.includes(keyword)) {
        score++;
      }
    });
    setAlignmentScore(score);
  }, [editedText]);

  return (
    <div className="tailoring-simulation">
      <Content content={activityData.content} />
      <h3>The Tailoring Simulation</h3>
      <p>This is your crafting challenge! Rewrite your experience section on the right. Drag in your powerful PAR statements and integrate the keywords you found. Watch your "Alignment Score" update in real-time.</p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Left Panel: Reference Materials */}
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px', background: '#f9f9f9' }}>
          <h4>Reference Materials</h4>
          <strong>Your Keywords:</strong>
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0, gap: '5px' }}>
            {placeholderKeywords.map(kw => <li key={kw} style={{ background: '#eee', padding: '2px 8px', borderRadius: '10px' }}>{kw}</li>)}
          </ul>
          <hr style={{ margin: '1rem 0' }}/>
          <strong>Your PAR Arsenal:</strong>
          <ul>
            {placeholderParStatements.map(par => <li key={par.id}>{par.text}</li>)}
          </ul>
           <hr style={{ margin: '1rem 0' }}/>
          <strong>Original Resume Section:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{placeholderOriginalResume}</pre>
        </div>

        {/* Right Panel: Editor */}
        <div style={{ flex: 2 }}>
           <h4>Rewrite Your Experience Section Here</h4>
            <div style={{ marginBottom: '10px' }}>
                <strong>Alignment Score:</strong> {alignmentScore} / {placeholderKeywords.length}
            </div>
           <textarea
            style={{ width: '100%', minHeight: '400px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            placeholder="Start writing your new, improved experience section here..."
          />
        </div>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Yin (Emotional Support) - Low-Stakes Rationale */}
      <div className="low-stakes-rationale" style={{ marginTop: '20px' }}>
        <h3>This is a Practice Zone</h3>
        <p>"The 'Alignment Score' isn't a judgment; it's a guide. The goal here is to experiment and build the muscle memory of tailoring your resume. There's no pressure to get it perfect on the first try."</p>
      </div>
    </div>
  );
};

export default TailoringSimulation;
