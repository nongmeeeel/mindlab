import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mbtiQuestions } from '../../data/mbti/questions';
import '../../styles/Test.css';
import { calculateMBTIScores, determineMBTIType } from '../../data/mbti/calculator';

// import AdBanner from '../../components/AdBanner';

const MBTITest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (dimension, type) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: { dimension, type }
    };
    
    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setAnswers(newAnswers);
    } else {
      // 최종 점수 계산
      const preferenceScores = calculateMBTIScores(newAnswers);
      const typeResult = determineMBTIType(preferenceScores);
      
      // MBTI 유형 조합
      const mbtiType = typeResult.EI + typeResult.SN + typeResult.TF + typeResult.JP;

      // 결과 페이지로 이동
      navigate('/result/mbti', {
        state: {
          resultType: mbtiType,
          scores: [
            preferenceScores.EI,  // E-I 선호도
            preferenceScores.SN,  // S-N 선호도
            preferenceScores.TF,  // T-F 선호도
            preferenceScores.JP   // J-P 선호도
          ]
        }
      });
    }
  };

  const question = mbtiQuestions[currentQuestion];

  return (
    <div className="test-page mbti-test">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestion + 1) / mbtiQuestions.length * 100}%` }}
        />
      </div>

      <div className="question-container">
        {/* <h2>질문 {currentQuestion + 1}</h2> */}
        <p className="question-text">{question.text}</p>

        <div className="options-container mbti-options">
          <button 
            className="option-button"
            onClick={() => handleAnswer(question.dimension, question.options[0].type)}
          >
            {question.options[0].text}
          </button>
          <button 
            className="option-button"
            onClick={() => handleAnswer(question.dimension, question.options[1].type)}
          >
            {question.options[1].text}
          </button>
        </div>
      </div>

      {/* 테스트 하단에 광고 추가 */}
      {/* <div className="ad-container">
        <AdBanner />
      </div> */}
    </div>
  );
};

export default MBTITest; 