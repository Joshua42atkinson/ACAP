import React, { useState } from 'react';

// Placeholder data for peer submissions
const peerSubmissions = [
  {
    id: 101,
    text: `
- Implemented a new digital, color-coded filing system, which reduced file retrieval time by 50% and eliminated lost documents.
- Spearheaded a project to migrate customer data to a new CRM, increasing data accuracy by 98%.
- Trained 5 new team members on company software and procedures.
    `
  },
  {
    id: 102,
    text: `
- Managed inventory for a busy retail environment, reducing stockouts by 25% through improved forecasting.
- Created weekly sales reports for management that identified key trends.
- Led a team initiative to reorganize the stockroom, saving an estimated 5 hours per week in labor.
    `
  }
];

const PeerReview = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitForReview = () => {
    // In a real app, this would send the user's work to the backend
    alert("Your work has been submitted for anonymous review! You've unlocked two peer submissions to review.");
    setSubmitted(true);
  };

  const handleFeedbackSubmit = (submissionId) => {
    // In a real app, this would save the feedback to the backend
    alert(`Thank you for your feedback on submission #${submissionId}!`);
  };

  return (
    <div className="peer-review">
      <h3>Guild Support: Peer Review</h3>
      {!submitted ? (
        <div>
          <p>The final step in this module is to give and receive feedback. When you're ready, submit your rewritten experience section for anonymous review by two of your peers.</p>
          <button onClick={handleSubmitForReview}>Submit My Work & Begin Reviewing</button>
        </div>
      ) : (
        <div>
          <p>Below are two anonymous submissions from your peers. Please provide constructive feedback using the rubric.</p>
          {peerSubmissions.map(submission => (
            <div key={submission.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
              <h4>Peer Submission #{submission.id}</h4>
              <pre style={{ whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: '10px', border: '1px solid #eee' }}>
                {submission.text}
              </pre>
              <form onSubmit={(e) => { e.preventDefault(); handleFeedbackSubmit(submission.id); }}>
                <strong>Feedback Rubric:</strong>
                <div style={{ marginTop: '10px' }}>
                  <label><strong>Clarity:</strong> Is it easy to understand what they achieved?</label>
                  <input type="text" placeholder="Your feedback on clarity..." style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                 <div style={{ marginTop: '10px' }}>
                  <label><strong>Impact:</strong> Did they use strong action verbs and numbers?</label>
                  <input type="text" placeholder="Your feedback on impact..." style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                 <div style={{ marginTop: '10px' }}>
                  <label><strong>Relevance:</strong> Does it seem to align with a specific job target?</label>
                  <input type="text" placeholder="Your feedback on relevance..." style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Submit Feedback</button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeerReview;
