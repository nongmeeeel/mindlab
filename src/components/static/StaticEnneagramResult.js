import React, { useState, useEffect } from 'react';
import { enneagramDescriptions } from '../../data/enneagram/results';
import EnneagramDetail from '../detail/EnneagramDetail';
import '../../styles/Result.css';
import ImageActions from '../ImageActions';
import ActionButtons from '../ActionButtons';

const StaticEnneagramResult = ({ resultType }) => {
  const result = enneagramDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  // 정적 페이지용 기본 scores 설정
  const scores = {
    1: resultType === 1 ? 40 : 20,
    2: resultType === 2 ? 40 : 20,
    3: resultType === 3 ? 40 : 20,
    4: resultType === 4 ? 40 : 20,
    5: resultType === 5 ? 40 : 20,
    6: resultType === 6 ? 40 : 20,
    7: resultType === 7 ? 40 : 20,
    8: resultType === 8 ? 40 : 20,
    9: resultType === 9 ? 40 : 20
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePremiumPurchase = () => {
    setIsPremium(true);
  };

  return (
    <div className="result-page">
      <div id="result-container" className="result-container enneagram-container">
        <ActionButtons 
          position="top" 
          type="enneagram"
          resultType={resultType}
          scores={scores}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />

        <div className="result-header">
          <h1>나의 에니어그램은 ?</h1>
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
            title={`${result.title}-${result.subtitle}`}
            type="에니어그램"
          />
        </div>

        <div className="result-card">
          <div className="mbti-result">
            <h2>{result.title}</h2>
            <p className="mbti-subtitle">{result.subtitle}</p>
          </div>
          
          <div className="analysis-section">
            <p className="type-description">{result.description}</p>
          </div>

          <div className="states-section">
            <h3>건강한 상태</h3>
            <div className="section-content">
              <p>{result.states.healthy}</p>
            </div>
            
            <h3>평균적인 상태</h3>
            <div className="section-content">
              <p>{result.states.average}</p>
            </div>
            
            <h3>불건강한 상태</h3>
            <div className="section-content">
              <p>{result.states.unhealthy}</p>
            </div>
          </div>

          <div className="keywords-section">
            <h3>강점</h3>
            <div className="keyword-list strength-list">
              {result.strengths.map((strength, index) => (
                <div key={index} className="keyword-item strength-item">
                  {strength}
                </div>
              ))}
            </div>

            <h3>약점</h3>
            <div className="keyword-list weakness-list">
              {result.weaknesses.map((weakness, index) => (
                <div key={index} className="keyword-item weakness-item">
                  {weakness}
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPremium && (
          <div className="premium-content">
            <EnneagramDetail scores={scores} resultType={resultType} />
          </div>
        )}

        <ActionButtons 
          position="bottom"
          type="enneagram"
          resultType={resultType}
          scores={scores}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default StaticEnneagramResult; 