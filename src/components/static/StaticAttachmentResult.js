import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { attachmentDescriptions } from '../../data/attachment/results';
import AttachmentDetail from '../detail/AttachmentDetail';
import '../../styles/Result.css';
import ImageActions from '../ImageActions';
import ActionButtons from '../ActionButtons';

const StaticAttachmentResult = ({ resultType }) => {
  const result = attachmentDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  // 정적 페이지용 기본 scores 설정
  const scores = {
    self: resultType === 'secure' || resultType === 'avoidant' ? 2 : -2,   // 긍정: 2, 부정: -2
    others: resultType === 'secure' || resultType === 'anxious' ? 2 : -2   // 긍정: 2, 부정: -2
  };

  // 점수 설명:
  // secure: { self: 2, others: 2 }       - 자기/타인 모두 긍정
  // anxious: { self: -2, others: 2 }     - 자기 부정, 타인 긍정
  // avoidant: { self: 2, others: -2 }    - 자기 긍정, 타인 부정
  // disorganized: { self: -2, others: -2 } - 자기/타인 모두 부정

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePremiumPurchase = () => {
    setIsPremium(true);
  };

  const canonicalUrl = `https://indigolabz.com/static/attachment/${resultType}`;
  const metaDescription = `${result.title}(${result.subtitle})의 대인관계 특성과 애착 형성 과정을 알아보세요. ${result.relationships}`.slice(0, 155);

  return (
    <div className="result-page">
      <Helmet>
        <title>{`${result.title} - ${result.subtitle} | 마인드랩`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${result.title} - ${result.subtitle}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>
      <div id="result-container" className="result-container attachment-container">
        <ActionButtons 
          position="top" 
          type="attachment"
          resultType={resultType}
          scores={scores}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />

        <div className="result-header">
          <h1>나의 애착유형은 ?</h1>
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
            type="애착유형"
          />
        </div>

        <div className="result-card">
          <div className="mbti-result">
            <h2>{result.title}</h2>
            <p className="mbti-subtitle">{result.subtitle}</p>
          </div>

          <div className="perspectives-section">
            <div className="section-content">
              <div className="keyword-list">
                <h3>자기 관점</h3>
                {result.perspectives.self.map((perspective, index) => (
                  <div key={index} className="keyword-item strength-item">
                    {perspective}
                  </div>
                ))}
              </div>
            </div>

            <div className="section-content">
              <div className="keyword-list">
                <h3>타인 관점</h3>
                {result.perspectives.others.map((perspective, index) => (
                  <div key={index} className="keyword-item weakness-item">
                    {perspective}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="background-section">
            <h3>애착 형성 과정</h3>
            <p>{result.background}</p>
          </div>

          <div className="relationships-section">
            <h3>대인관계 특성</h3>
            <p>{result.relationships}</p>
          </div>

          <div className="phrases-section">
            <h3>자주 하는 말</h3>
            <div className="phrases-list">
              {result.commonPhrases.map((phrase, index) => (
                <div key={index} className="phrase-item">
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPremium && (
          <div className="premium-content">
            <AttachmentDetail 
              resultType={resultType}
              scores={scores}
            />
          </div>
        )}

        <ActionButtons 
          position="bottom"
          type="attachment"
          resultType={resultType}
          scores={scores}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default StaticAttachmentResult; 