import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { enneagramDescriptions } from '../../data/enneagram/results';
import EnneagramDetail from '../../components/detail/EnneagramDetail';
import '../../styles/Result.css';
import ImageActions from '../../components/ImageActions';
import ActionButtons from '../../components/ActionButtons';
import { logEvent } from '../../utils/analytics';

const EnneagramResult = () => {
  const location = useLocation();
  const { resultType, scores } = location.state || {};
  const result = enneagramDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  useEffect(() => {
    logEvent('test_result', {
      test_type: 'enneagram',
      result_type: resultType
    });
  }, [resultType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(scores);

  const handlePremiumPurchase = () => {
    // 여기에 결제 로직 추가
    setIsPremium(true);
  };

  return (
    <div className="result-page">
      <div id="result-container" className="result-container enneagram-container">
        <ActionButtons 
          position="top" 
          type="enneagram"
          scores={scores}
          resultType={resultType}
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
          scores={scores}
          resultType={resultType}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default EnneagramResult; 