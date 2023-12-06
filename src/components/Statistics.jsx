import React from 'react';

const statisticsStyle = {
  margin: '20px 0',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const labelStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '5px',
};

const valueStyle = {
  fontSize: '14px',
  marginBottom: '10px',
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div style={statisticsStyle}>
    <p style={labelStyle}>
      Хорошо: <span style={valueStyle}>{good}</span>
    </p>
    <p style={labelStyle}>
      Нейтрально: <span style={valueStyle}>{neutral}</span>
    </p>
    <p style={labelStyle}>
      Плохо: <span style={valueStyle}>{bad}</span>
    </p>
    <p style={labelStyle}>
      Всего отзывов: <span style={valueStyle}>{total}</span>
    </p>
    <p style={labelStyle}>
      Процент положительных отзывов:{' '}
      <span style={valueStyle}>{positivePercentage}%</span>
    </p>
  </div>
);
export default Statistics;
