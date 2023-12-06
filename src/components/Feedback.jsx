import React from 'react';
const container = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  justifyContent: 'center',
};
const buttonStyle = {
  margin: '5px',
  padding: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
};

const buttonStyles = {
  good: {
    backgroundColor: '#4CAF50',
  },
  neutral: {
    backgroundColor: '#FFD700',
  },
  bad: {
    backgroundColor: '#FF6347',
  },
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div style={container}>
    {options.map(option => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        style={{ ...buttonStyles[option], ...buttonStyle }}
      >
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
