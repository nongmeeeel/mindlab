import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mbtiDescriptions } from '../../data/mbti/results';
import Payment from '../../components/Payment';
import DetailedReport from '../../components/DetailedReport';
import '../../styles/Result.css';

const MBTIResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultType } = location.state || {};
  const result = mbtiDescriptions[resultType];
  const [showDetailedReport, setShowDetailedReport] = useState(false);

  // 상세 리포트 데이터
  const detailedData = {
    dimensionScores: {
      labels: ['외향-내향', '감각-직관', '사고-감정', '판단-인식'],
      datasets: [
        {
          label: '선호도',
          data: [65, 45, 80, 30], // 예시 데이터
          backgroundColor: [
            'rgba(102,126,234,0.5)',
            'rgba(102,126,234,0.5)',
            'rgba(102,126,234,0.5)',
            'rgba(102,126,234,0.5)'
          ],
          borderColor: [
            'rgba(102,126,234,1)',
            'rgba(102,126,234,1)',
            'rgba(102,126,234,1)',
            'rgba(102,126,234,1)'
          ],
          borderWidth: 1
        }
      ]
    },
    analysis: [
      '당신은 강한 외향성을 보이며, 다양한 사람들과의 교류를 즐깁니다.',
      '논리적 사고를 바탕으로 한 의사결정을 선호합니다.',
      '계획적이고 체계적인 생활 방식을 추구합니다.',
      '새로운 아이디어와 가능성을 탐구하는 것을 좋아합니다.'
    ],
    recommendations: [
      '내적 성찰의 시간을 가져보는 것도 좋을 것 같습니다.',
      '감정적 측면도 고려하여 균형 잡힌 판단을 해보세요.',
      '때로는 즉흥적인 결정을 통해 새로운 경험을 시도해보세요.',
      '다른 사람들의 다양한 관점을 수용하려 노력해보세요.'
    ]
  };

  const handlePaymentSuccess = () => {
    setShowDetailedReport(true);
  };

  return (
    <div className="result-page">
      <div className="result-container mbti-container">
        <div className="result-header">
          <h1>MBTI 검사 결과</h1>
        </div>

        <div className="result-card">
          <div className="result-type">
            <div className="mbti-result">{resultType}</div>
            <h2>{result?.title}</h2>
            <p className="type-description">{result?.description}</p>
            <div className="traits-list">
              {result?.traits.map((trait, index) => (
                <div key={index} className="trait-item">
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="report-section">
          {!showDetailedReport ? (
            <button 
              className="report-button"
              onClick={() => {
                const confirmed = window.confirm('상세 분석 리포트를 구매하시겠습니까? (5,000원)');
                if (confirmed) {
                  handlePaymentSuccess(); // 실제로는 여기서 Payment 컴포넌트를 모달로 띄우거나 결제 처리
                }
              }}
            >
              상세 분석 리포트 보기
            </button>
          ) : (
            <DetailedReport 
              type="mbti"
              data={detailedData}
            />
          )}
        </div>

        <button onClick={() => navigate('/')} className="restart-button">
          다른 검사하기
        </button>
      </div>
    </div>
  );
};

export default MBTIResult; 