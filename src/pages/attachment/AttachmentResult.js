import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { attachmentDescriptions } from '../../data/attachment/results';
import DetailedReport from '../../components/DetailedReport';
import '../../styles/Result.css';

const AttachmentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultType } = location.state || {};
  const result = attachmentDescriptions[resultType];
  const [showDetailedReport, setShowDetailedReport] = useState(false);

  // 유형별 맞춤 추천사항 생성 함수를 먼저 정의
  const getRecommendations = (type) => {
    switch(type) {
      case 'secure':
        return [
          '현재의 건강한 관계 패턴을 계속 유지해보세요.',
          '다른 사람들과의 관계에서 멘토 역할을 해보세요.',
          '자신의 강점을 활용해 주변 사람들을 도와주세요.'
        ];
      case 'anxious':
        return [
          '자신의 가치를 타인의 반응에 과도하게 연결시키지 마세요.',
          '독립적인 활동을 통해 자존감을 키워보세요.',
          '관계에 대한 불안을 줄이는 방법을 연습해보세요.'
        ];
      case 'avoidant':
        return [
          '점진적으로 타인과의 친밀감을 늘려보세요.',
          '감정 표현을 연습해보세요.',
          '신뢰할 수 있는 사람과 조금씩 마음을 나눠보세요.'
        ];
      case 'disorganized':
        return [
          '전문가의 도움을 받아 안정적인 관계 패턴을 만들어보세요.',
          '자신의 감정 패턴을 이해하고 조절하는 방법을 배워보세요.',
          '안전한 관계에서부터 시작해 점진적으로 신뢰를 쌓아보세요.'
        ];
      default:
        return [];
    }
  };

  // 그 다음 detailedData 정의
  const detailedData = {
    patternScores: {
      labels: ['안정형', '불안형', '회피형', '혼란형'],
      datasets: [{
        label: '애착 유형 분포',
        data: location.state?.scores || [0, 0, 0, 0],
        backgroundColor: 'rgba(72,198,239,0.2)',
        borderColor: 'rgba(72,198,239,1)',
        tension: 0.4,
        fill: true
      }]
    },
    analysis: [
      `당신은 ${result.title}이 가장 강하게 나타납니다.`,
      result.description,
      ...result.traits
    ],
    recommendations: getRecommendations(resultType)
  };

  return (
    <div className="result-page">
      <div className="result-container attachment-container">
        <div className="result-header">
          <h1>애착유형 검사 결과</h1>
        </div>

        <div className="result-card">
          <div className="result-image">
            <img src={result.image} alt={result.title} />
          </div>
          
          <div className="result-type">
            <div className="attachment-result">
              <h2>{result.title}</h2>
            </div>
            <p className="type-description">{result.mainDescription}</p>
            
            <div className="traits-section">
              <h3>주요 특징</h3>
              <div className="traits-list">
                {result.traits.map((trait, index) => (
                  <div key={index} className="trait-item">
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            <div className="relationship-section">
              <h3>관계에서의 특징</h3>
              <p>{result.relationships}</p>
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
                  setShowDetailedReport(true);
                }
              }}
            >
              상세 분석 리포트 보기
            </button>
          ) : (
            <DetailedReport 
              type="attachment"
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

export default AttachmentResult; 