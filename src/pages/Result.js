import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Result.css';

// MBTI 유형별 설명
const mbtiDescriptions = {
  'ISTJ': '신중하고 철저한 관리자',
  'ISFJ': '따뜻한 보호자',
  'INFJ': '통찰력 있는 이상주의자',
  'INTJ': '전략적인 설계자',
  'ISTP': '만능 재주꾼',
  'ISFP': '예술가형',
  'INFP': '열정적인 중재자',
  'INTP': '논리적인 사색가',
  'ESTP': '모험을 즐기는 사업가',
  'ESFP': '자유로운 영혼의 연예인',
  'ENFP': '재기발랄한 활동가',
  'ENTP': '논쟁을 즐기는 변론가',
  'ESTJ': '엄격한 관리자',
  'ESFJ': '사교적인 외교관',
  'ENFJ': '정의로운 사회운동가',
  'ENTJ': '대담한 통솔자'
};

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scores = location.state?.scores || {};

  // MBTI 유형 계산
  const calculateType = () => {
    if (!scores) return 'XXXX';
    return [
      scores.E > scores.I ? 'E' : 'I',
      scores.S > scores.N ? 'S' : 'N',
      scores.T > scores.F ? 'T' : 'F',
      scores.J > scores.P ? 'J' : 'P'
    ].join('');
  };

  const mbtiType = calculateType();

  // 각 지표별 점수 계산 (백분율)
  const calculatePercentage = (score1, score2) => {
    const total = Math.abs(score1) + Math.abs(score2);
    return total === 0 ? 50 : (Math.abs(score1) / total) * 100;
  };

  // 공유하기 기능
  const shareResult = () => {
    // 점수를 URL 파라미터로 변환
    const scoreParams = new URLSearchParams();
    Object.entries(scores).forEach(([key, value]) => {
      scoreParams.append(key.toLowerCase(), value);
    });
    
    // 전체 공유 URL 생성
    const shareUrl = `${window.location.origin}/result?${scoreParams.toString()}`;

    if (navigator.share) {
      navigator.share({
        title: '마인드랩 MBTI 결과',
        text: `내 MBTI 유형은 ${mbtiType}입니다! (${mbtiDescriptions[mbtiType]})`,
        url: shareUrl
      }).catch(console.error);
    } else {
      // 클립보드에 복사
      const text = `내 MBTI 유형은 ${mbtiType}입니다! (${mbtiDescriptions[mbtiType]})
결과 보기: ${shareUrl}`;
      
      navigator.clipboard.writeText(text)
        .then(() => alert('클립보드에 복사되었습니다!'))
        .catch(console.error);
    }
  };

  return (
    <div className="result">
      <h2>당신의 MBTI 유형은...</h2>
      
      {/* MBTI 결과 */}
      <div className="mbti-result">{mbtiType}</div>
      <div className="mbti-description">
        {mbtiDescriptions[mbtiType]}
      </div>

      {/* 지표별 점수 그래프 */}
      <div className="type-graphs">
        <div className="type-bar">
          <span>I</span>
          <div className="bar">
            <div 
              className="bar-fill" 
              style={{ width: `${calculatePercentage(scores.I, scores.E)}%` }}
            />
          </div>
          <span>E</span>
        </div>
        <div className="type-bar">
          <span>S</span>
          <div className="bar">
            <div 
              className="bar-fill" 
              style={{ width: `${calculatePercentage(scores.S, scores.N)}%` }}
            />
          </div>
          <span>N</span>
        </div>
        <div className="type-bar">
          <span>T</span>
          <div className="bar">
            <div 
              className="bar-fill" 
              style={{ width: `${calculatePercentage(scores.T, scores.F)}%` }}
            />
          </div>
          <span>F</span>
        </div>
        <div className="type-bar">
          <span>J</span>
          <div className="bar">
            <div 
              className="bar-fill" 
              style={{ width: `${calculatePercentage(scores.J, scores.P)}%` }}
            />
          </div>
          <span>P</span>
        </div>
      </div>

      {/* 버튼들 */}
      <div className="result-buttons">
        <button onClick={shareResult} className="share-button">
          결과 공유하기
        </button>
        <button onClick={() => navigate('/')} className="restart-button">
          다시 검사하기
        </button>
      </div>
    </div>
  );
};

export default Result; 