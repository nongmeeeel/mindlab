import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>마인드랩 심리 검사</h1>
        <div className="test-buttons">
          <button 
            onClick={() => navigate('/test/mbti')} 
            className="test-button mbti"
          >
            <h2>MBTI 검사</h2>
            <p>나의 성격 유형 알아보기</p>
          </button>
          <button 
            onClick={() => navigate('/test/enneagram')} 
            className="test-button enneagram"
          >
            <h2>에니어그램 검사</h2>
            <p>나의 내면 알아보기</p>
          </button>
          <button 
            onClick={() => navigate('/test/attachment')} 
            className="test-button attachment"
          >
            <h2>애착유형 검사</h2>
            <p>나의 연애 스타일 알아보기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home; 