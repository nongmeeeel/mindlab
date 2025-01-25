import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { attachmentDescriptions } from '../../data/attachment/results';
import AttachmentDetail from '../../components/detail/AttachmentDetail';
import '../../styles/Result.css';
import ImageActions from '../../components/ImageActions';
import ActionButtons from '../../components/ActionButtons';
import { logEvent } from '../../utils/analytics';

const AttachmentResult = () => {
  const location = useLocation();
  const { resultType, scores } = location.state || {};
  const result = attachmentDescriptions[resultType];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isPremium, setIsPremium] = useState(true);

  useEffect(() => {
    if (resultType) {
      logEvent(
        'test_complete',
        'result_view',
        `attachment_${resultType}`
      );
    }
  }, [resultType]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 자기/타인 이미지 성향 텍스트 생성
  const getSelfImageText = () => {
    return scores.self >= 0 ? "긍정적" : "부정적";
  };

  const getOthersImageText = () => {
    return scores.others >= 0 ? "긍정적" : "부정적";
  };

  const handlePremiumPurchase = () => {
    setIsPremium(true);
  };

  return (
    <div className="result-page">
      <div id="result-container" className="result-container attachment-container">
        <ActionButtons 
          position="top" 
          type="attachment"
          scores={scores}
          resultType={resultType}
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
                <div className="keyword-item strength-item">
                  자신에 대해 {getSelfImageText()} 이미지
                </div>
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
                <div className="keyword-item weakness-item">
                  타인에 대해 {getOthersImageText()} 이미지
                </div>
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
            <AttachmentDetail scores={scores} resultType={resultType} />
          </div>
        )}

        <ActionButtons 
          position="bottom"
          type="attachment"
          scores={scores}
          resultType={resultType}
          onPremiumPurchase={handlePremiumPurchase}
          isPremium={isPremium}
        />
      </div>
    </div>
  );
};

export default AttachmentResult; 