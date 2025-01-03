import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scores = location.state?.scores;

  const calculateType = () => {
    if (!scores) return 'XXXX';
    
    const type = [
      scores.E > scores.I ? 'E' : 'I',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ].join('');
    
    return type;
  };

  const mbtiType = calculateType();

  return (
    <div className="result">
      <h2>당신의 MBTI 유형은...</h2>
      <div className="mbti-result">{mbtiType}</div>
      <button onClick={() => navigate('/')} className="restart-button">
        다시 검사하기
      </button>
    </div>
  );
};

export default Result; 