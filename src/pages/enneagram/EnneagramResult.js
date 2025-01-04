import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { enneagramDescriptions } from '../../data/enneagram/results';
import DetailedReport from '../../components/DetailedReport';
import '../../styles/Result.css';

const EnneagramResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultType } = location.state || {};
  const result = enneagramDescriptions[resultType] || {
    title: '',
    description: '',
    traits: []
  };
  const [showDetailedReport, setShowDetailedReport] = useState(false);

  // 유형별 맞춤 추천사항 생성 함수를 먼저 정의
  const getRecommendations = (type) => {
    const recommendations = {
      1: [
        '완벽주의적 성향을 조금 내려놓아보세요.',
        '실수를 통해 배우는 기회로 삼아보세요.',
        '자신과 타인에 대해 더 너그러워지세요.'
      ],
      2: [
        '자신의 필요도 소중히 여기세요.',
        '도움을 주는 것과 받는 것의 균형을 찾아보세요.',
        '건강한 경계선을 설정해보세요.'
      ],
      3: [
        '성과 이외의 자신의 가치를 발견해보세요.',
        '진정한 자아를 탐색하는 시간을 가져보세요.',
        '실패를 두려워하지 마세요.'
      ],
      4: [
        '현재의 일상에서 의미를 찾아보세요.',
        '다른 사람들과의 공통점도 소중히 여기세요.',
        '감정의 균형을 잡아보세요.'
      ],
      5: [
        '지식을 실제 삶에 적용해보세요.',
        '다른 사람들과 더 많이 교류해보세요.',
        '감정 표현을 연습해보세요.'
      ],
      6: [
        '자신의 직관과 판단을 더 신뢰해보세요.',
        '불확실성을 받아들이는 연습을 해보세요.',
        '긍정적인 면에 더 집중해보세요.'
      ],
      7: [
        '현재에 더 집중해보세요.',
        '깊이 있는 경험을 시도해보세요.',
        '불편한 감정도 회피하지 마세요.'
      ],
      8: [
        '부드러운 리더십도 시도해보세요.',
        '자신의 취약성을 인정하는 것도 괜찮습니다.',
        '타인의 의견에 더 귀 기울여보세요.'
      ],
      9: [
        '자신의 의견을 더 적극적으로 표현해보세요.',
        '갈등을 회피하지 말고 직면해보세요.',
        '자신의 우선순위를 명확히 하세요.'
      ]
    };
    return recommendations[type] || [];
  };

  // 그 다음 detailedData 정의
  const detailedData = {
    typeScores: {
      labels: ['1유형', '2유형', '3유형', '4유형', '5유형', '6유형', '7유형', '8유형', '9유형'],
      datasets: [{
        label: '유형별 성향',
        data: location.state?.scores || Array(9).fill(0),
        backgroundColor: 'rgba(238,140,104,0.2)',
        borderColor: 'rgba(238,140,104,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(238,140,104,1)',
      }]
    },
    analysis: [
      `당신은 ${result.title}의 특성이 가장 강합니다.`,
      result.description,
      ...result.traits
    ],
    recommendations: getRecommendations(resultType)
  };

  const handlePaymentSuccess = () => {
    setShowDetailedReport(true);
  };

  // resultType이 없으면 홈으로 리다이렉트
  if (!resultType) {
    navigate('/');
    return null;
  }

  return (
    <div className="result-page">
      <div className="result-container enneagram-container">
        <div className="result-header">
          <h1>에니어그램 검사 결과</h1>
        </div>

        <div className="result-card">
          <div className="result-type">
            <div className="enneagram-result">
              <div className="type-number">Type {resultType}</div>
              <div className="type-title">{result.title}</div>
            </div>
            <h2>{result.title}</h2>
            <p className="type-description">{result.description}</p>
            <div className="traits-list">
              {result.traits?.map((trait, index) => (
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
                  handlePaymentSuccess();
                }
              }}
            >
              상세 분석 리포트 보기
            </button>
          ) : (
            <DetailedReport 
              type="enneagram"
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

export default EnneagramResult; 