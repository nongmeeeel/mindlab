import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/NewYearWish.css';
import fortuneColor from './assets/fortune-color.png';
import { getRandomFortune } from './data/wishes';

const NewYearWish = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [isActivated, setIsActivated] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedWish, setSelectedWish] = useState(null);

  // 연도 선택용 배열 (1950-2024)
  const years = Array.from(
    { length: 75 }, 
    (_, i) => 2024 - i
  );

  const handleSubmit = () => {
    if (name && birthYear) {
      setIsActivated(true);
      setIsAnimating(true);
      
      // wishes.js에서 정의한 getRandomFortune 함수 사용
      setSelectedWish(getRandomFortune());

      setTimeout(() => {
        setShowResult(true);
      }, 2000);
    }
  };

  // 디버깅을 위한 콘솔 로그 추가
  console.log('current selectedWish:', selectedWish);
  console.log('showResult:', showResult);

  return (
    <div className="newyear-container">
      <div className="fortune-content">
        <h1>2025년 올해의 운세</h1>
        
        {!showResult && (
          <div className={`fortune-image ${showResult ? 'fade-out' : ''}`}>
            <img 
              src={fortuneColor}
              alt="복주머니"
              className={isAnimating ? 'pulse' : ''}
            />
          </div>
        )}

        {!isActivated && (
          <div className="input-section">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="name-input"
            />
            
            <select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="year-select"
            >
              <option value="">출생년도</option>
              {years.map(year => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>

            <button 
              onClick={handleSubmit}
              className="submit-button"
            >
              운세 보기
            </button>
          </div>
        )}

        {showResult && selectedWish && (
          <div className="result-section fade-in">
            <div className="wish-section money">
              <h2>💰 재물운</h2>
              <p>{selectedWish.money}</p>
            </div>
            
            <div className="wish-section love">
              <h2>💕 애정운</h2>
              <p>{selectedWish.love}</p>
            </div>
            
            <div className="wish-section person">
              <h2>👥 올해 만날 귀인</h2>
              <p>{selectedWish.person}</p>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="home-button"
            >
              다른 검사 하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewYearWish; 