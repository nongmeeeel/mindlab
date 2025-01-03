import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { attachmentDescriptions } from '../../data/attachment/results';
import Payment from '../../components/Payment';
import '../../styles/Result.css';

const AttachmentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultType } = location.state || {};
  const result = attachmentDescriptions[resultType];

  return (
    <div className="result-page">
      <div className="result-container attachment-container">
        <div className="result-header">
          <h1>애착유형 검사 결과</h1>
        </div>

        <div className="result-card">
          <div className="result-type">
            <h2>{result?.title}</h2>
            <p className="type-description">{result?.description}</p>
            <div className="traits-list">
              {result?.traits.map((trait, index) => (
                <div key={index} className="trait-item">
                  • {trait}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="premium-container">
          <h2>프리미엄 서비스</h2>
          <div className="premium-options">
            <Payment 
              amount={5000} 
              service="상세 분석 리포트" 
            />
            <Payment 
              amount={15000} 
              service="1:1 전문가 상담 (30분)" 
            />
          </div>
        </div>

        <button onClick={() => navigate('/')} className="restart-button">
          다른 검사하기
        </button>
      </div>
    </div>
  );
};

export default AttachmentResult; 