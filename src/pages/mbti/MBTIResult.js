import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mbtiDescriptions } from '../../data/mbti/results';
import MBTIDetail from '../../components/detail/MBTIDetail';
import '../../styles/Result.css';
import ImageActions from '../../components/ImageActions';
import ActionButtons from '../../components/ActionButtons';
import { logEvent } from '../../utils/analytics';
import AdBanner from '../../components/AdBanner';
const MBTIResult = () => {
  const location = useLocation();
  const { resultType, scores } = location.state || {};
  const result = mbtiDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  console.log('MBTIResult scores:', scores);

  useEffect(() => {
    if (resultType) {
      logEvent(
        'test_complete',
        'result_view',
        `mbti_${resultType}`
      );
    }
  }, [resultType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePremiumPurchase = () => {
    // 여기에 결제 로직 추가
    setIsPremium(true);
  };

  return (
    <div className="result-page">
      <div id="result-container" className="result-container mbti-container">
        <ActionButtons 
          position="top" 
          type="mbti"
          resultType={resultType}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />

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
        
        <div className="ad-container">
          <AdBanner />
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
            <h3>강점 키워드</h3>
            <div className="section-content">
              <div className="keyword-list strength-list">
                {result.strengths.map((strength, index) => (
                  <div key={index} className="keyword-item strength-item">
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            <h3>약점 키워드</h3>
            <div className="section-content">
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
            <h3>{result.matches.romantic.title}</h3>
            <div className="match-list romantic-list">
              {result.matches.romantic.types.map((match, index) => (
                <div key={index} className="match-item romantic">
                  {match}
                </div>
              ))}
            </div>
            <p className="match-description">
              {result.matches.romantic.description}
            </p>

            <h3>{result.matches.work.title}</h3>
            <div className="match-list work-list">
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

        <div className="ad-container">
          <AdBanner />
        </div>

        {isPremium && (
          <div className="premium-content">
            <MBTIDetail scores={scores} resultType={resultType} />
          </div>
        )}

        <ActionButtons 
          position="bottom"
          type="mbti"
          scores={scores}
          resultType={resultType}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default MBTIResult; 