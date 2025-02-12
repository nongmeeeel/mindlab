import React, { useState, useEffect } from 'react';
import { mbtiDescriptions } from '../../data/mbti/results';
import MBTIDetail from '../detail/MBTIDetail';
import '../../styles/Result.css';
import ImageActions from '../ImageActions';
import ActionButtons from '../ActionButtons';

const StaticMBTIResult = ({ resultType }) => {
  const result = mbtiDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  // 정적 페이지용 기본 scores 설정
  const scores = [
    resultType.includes('I') ? -33 : 33,  // EI (음수는 I, 양수는 E)
    resultType.includes('N') ? -33 : 33,  // SN (음수는 N, 양수는 S)
    resultType.includes('F') ? -33 : 33,  // TF (음수는 F, 양수는 T)
    resultType.includes('P') ? -33 : 33   // JP (음수는 P, 양수는 J)
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePremiumPurchase = () => {
    setIsPremium(true);
  };

  return (
    <div className="result-page">
      <div id="result-container" className="result-container mbti-container">
        <ActionButtons 
          position="top" 
          type="mbti"
          resultType={resultType}
          scores={scores}
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

        {isPremium && (
          <div className="premium-content">
            <MBTIDetail scores={scores} resultType={resultType} />
          </div>
        )}

        <ActionButtons 
          position="bottom"
          type="mbti"
          resultType={resultType}
          scores={scores}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default StaticMBTIResult; 