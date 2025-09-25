import React from 'react';

const Keywords = ({ keywords }) => {
  if (!keywords || keywords.length === 0) {
    return null;
  }

  return (
    <div className="keywords-container">
      <h4>Keywords to Look For:</h4>
      <ul className="keywords-list">
        {keywords.map((keyword, index) => (
          <li key={index} className="keyword-item">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;