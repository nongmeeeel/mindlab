import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBrain, FaUserCircle, FaHeart } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="header-section">
          <h1>마인드랩 심리 검사</h1>
        </div>

        <p className="test-notice">
          내가 원하는 모습이 아닌, 실제 내 모습을 생각하며 선택하면 검사의 정확도가 올라갑니다.
        </p>

        <div className="test-buttons">
          <button 
            onClick={() => navigate('/test/mbti')} 
            className="test-button mbti"
          >
            <div className="button-icon">
              <FaBrain />
            </div>
            <div className="button-text">
              <h2>MBTI 검사</h2>
              <p>나의 성격 유형 알아보기</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/test/enneagram')} 
            className="test-button enneagram"
          >
            <div className="button-icon">
              <FaUserCircle />
            </div>
            <div className="button-text">
              <h2>에니어그램 검사</h2>
              <p>나의 심층 내면 알아보기</p>
            </div>
          </button>

          <button 
            onClick={() => navigate('/test/attachment')} 
            className="test-button attachment"
          >
            <div className="button-icon">
              <FaHeart />
            </div>
            <div className="button-text">
              <h2>애착유형 검사</h2>
              <p>나의 연애 스타일 알아보기</p>
            </div>
          </button>
        </div>

        <footer className="home-footer">
          <p>© 2024 마인드랩. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home; 