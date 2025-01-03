import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>심리 검사 유형 선택</h1>
      <div className="test-selection">
        <button 
          className="test-button mbti"
          onClick={() => navigate('/test', { state: { type: 'MBTI' } })}
        >
          <h2>MBTI 성격 유형 검사</h2>
          <p>나의 성격 유형을 알아보세요</p>
        </button>
      </div>
    </div>
  );
};

export default Home; 