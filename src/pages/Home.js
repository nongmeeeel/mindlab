import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaBrain, FaUserCircle, FaHeart, FaBook } from 'react-icons/fa';
import '../styles/Home.css';
import { logEvent } from '../utils/analytics';
// import AdBanner from '../components/AdBanner';

const Home = () => {
  const navigate = useNavigate();

  const handleTestStart = (testType) => {
    logEvent(
      'test_start',  // category
      'click',       // action
      testType       // label
    );
    navigate(`/test/${testType}`);
  };

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
            onClick={() => handleTestStart('mbti')} 
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
            onClick={() => handleTestStart('enneagram')} 
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
            onClick={() => handleTestStart('attachment')} 
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

          {/* <button 
            onClick={() => handleTestStart('newYearWish')} 
            className="test-button newyear"
          >
            <div className="button-icon">
              <img 
                src={fortuneColor}
                alt="설날 운세"
                className="fortune-icon"
              />
            </div>
            <div className="button-text">
              <h2>설날 운세</h2>
              <p>2024년 나의 운세 보기</p>
            </div>
          </button> */}
        </div>
        
        <AdBanner adSlot="5402691877" />

        <div className="test-backgrounds">
          <h2>검사 이론 배경</h2>
          <div className="background-links">
            <Link to="/guide/mbti" className="background-item">
              <div className="background-icon">
                <FaBook />
              </div>
              <h3>MBTI 검사의 배경</h3>
              <p>융의 심리유형론을 기반으로 한 MBTI의 이론적 배경과 역사를 알아보세요.</p>
            </Link>

            <Link to="/guide/enneagram" className="background-item">
              <div className="background-icon">
                <FaBook />
              </div>
              <h3>에니어그램 검사의 배경</h3>
              <p>고대 수피즘에서 시작된 에니어그램의 역사와 이론을 살펴보세요.</p>
            </Link>

            <Link to="/guide/attachment" className="background-item">
              <div className="background-icon">
                <FaBook />
              </div>
              <h3>애착유형 검사의 배경</h3>
              <p>존 볼비의 애착이론이 현대 심리학에 미친 영향을 이해해보세요.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 