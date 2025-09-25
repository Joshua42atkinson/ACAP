import React from 'react';

const Content = ({ content }) => {
  return (
    <div
      className="activity-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Content;