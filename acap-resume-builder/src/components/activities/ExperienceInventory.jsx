import React from 'react';
import Content from '../Content';
import { module1Content } from '../../chapters/module1';
import { useResumeContext } from '../../context/ResumeContext';

const ExperienceInventory = () => {
  const activityData = module1Content[3];
  const { resumeData, setResumeData } = useResumeContext();
  const { parStatements, currentProblem, currentAction, currentResult } = resumeData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prevData => ({
        ...prevData,
        [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentProblem || !currentAction || !currentResult) {
      alert('Please fill out all three fields.');
      return;
    }
    const newStatement = {
      problem: currentProblem,
      action: currentAction,
      result: currentResult,
      id: Date.now() // simple unique id
    };
    setResumeData(prevData => ({
        ...prevData,
        parStatements: [...prevData.parStatements, newStatement],
        currentProblem: '',
        currentAction: '',
        currentResult: ''
    }));
  };

  return (
    <div className="experience-inventory">
      <Content content={activityData.content} />
      <h3>The Experience Inventory</h3>
      <p>For each key duty you identified in the last step, tell a mini-story using the "Problem-Action-Result" (PAR) framework.</p>

      <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label><strong>Problem:</strong> What was a challenge you faced?</label>
          <input type="text" name="currentProblem" value={currentProblem} onChange={handleInputChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label><strong>Action:</strong> What specific action did you take?</label>
          <input type="text" name="currentAction" value={currentAction} onChange={handleInputChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label><strong>Result:</strong> What was the positive, measurable outcome?</label>
          <input type="text" name="currentResult" value={currentResult} onChange={handleInputChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit">Add to Inventory</button>
      </form>

      <div className="par-list" style={{ marginTop: '20px' }}>
        <h4>Your PAR Arsenal ({parStatements.length} / 5-7 recommended)</h4>
        {parStatements.length === 0 ? (
          <p>Your saved PAR statements will appear here.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {parStatements.map(par => (
              <li key={par.id} style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <strong>Problem:</strong> {par.problem}<br />
                <strong>Action:</strong> {par.action}<br />
                <strong>Result:</strong> {par.result}
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {/* Yin (Emotional Support) - Reframing Exercise */}
      <div className="reframing-exercise" style={{ marginTop: '20px' }}>
        <h3>Reframe Your Perspective</h3>
        <p>"Many of us are taught not to 'brag.' But stating a factual result isn't bragging; it's providing evidence of your value. Look at your PAR statements. This isn't arrogance; it's the story of your competence. How does it feel to see your accomplishments laid out so clearly?"</p>
      </div>
    </div>
  );
};

export default ExperienceInventory;