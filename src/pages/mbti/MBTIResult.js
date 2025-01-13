import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mbtiDescriptions } from '../../data/mbti/results';
import '../../styles/Result.css';
import ImageActions from '../../components/ImageActions';
import ActionButtons from '../../components/ActionButtons';

const MBTIResult = () => {
  const location = useLocation();
  const { resultType } = location.state || {};
  const result = mbtiDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="result-page">
      <div className="result-container mbti-container">
        <ActionButtons position="top" />
        <div className="result-header">
          <h1>나의 MBTI는 ?</h1>
        </div>

        <div className="result-image">
          {!imageLoaded && (
            <div className="image-loading">
              <div className="loading-spinner"></div>
              <p>이미지 로딩중...</p>
            </div>
          )}
          <img 
            src={result.image} 
            alt={result.title}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
          <ImageActions 
            image={result.image}
            title={`${resultType}-${result.subtitle}`}
            type="MBTI"
          />
        </div>

        <div className="result-card">
          <div className="mbti-result">
            <h2>{result.title}</h2>
            <p className="mbti-subtitle">{result.subtitle}</p>
          </div>
          
          <div className="analysis-section">
            <h3>유형 분석</h3>
            <p className="type-description">{result.description}</p>
          </div>

          <div className="keywords-section">
            <div className="strengths">
              <h3>강점 키워드</h3>
              <div className="keyword-list strength-list">
                {result.strengths.map((strength, index) => (
                  <div key={index} className="keyword-item strength-item">
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            <div className="weaknesses">
              <h3>약점 키워드</h3>
              <div className="keyword-list weakness-list">
                {result.weaknesses.map((weakness, index) => (
                  <div key={index} className="keyword-item weakness-item">
                    {weakness}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="compatibility-section">
            <div className="romantic-matches">
              <h3>{result.matches.romantic.title}</h3>
              <div className="match-list">
                {result.matches.romantic.types.map((match, index) => (
                  <div key={index} className="match-item romantic">
                    {match}
                  </div>
                ))}
              </div>
              <p className="match-description">
                {result.matches.romantic.description}
              </p>
            </div>

            <div className="work-matches">
              <h3>{result.matches.work.title}</h3>
              <div className="match-list">
                {result.matches.work.types.map((match, index) => (
                  <div key={index} className="match-item work">
                    {match}
                  </div>
                ))}
              </div>
              <p className="match-description">
                {result.matches.work.description}
              </p>
            </div>
          </div>
        </div>

        <ActionButtons position="bottom" />
      </div>
    </div>
  );
};

export default MBTIResult; 