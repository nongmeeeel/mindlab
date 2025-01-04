import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mbtiQuestions } from '../../data/mbti/questions';
import '../../styles/Test.css';

const MBTITest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  });

  const handleAnswer = (dimension, type) => {
    const newScores = { ...scores };
    newScores[dimension][type] += 1;

    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setScores(newScores);
    } else {
      // 결과 계산
      const result = {
        E: scores.EI.E > scores.EI.I ? 'E' : 'I',
        S: scores.SN.S > scores.SN.N ? 'S' : 'N',
        T: scores.TF.T > scores.TF.F ? 'T' : 'F',
        J: scores.JP.J > scores.JP.P ? 'J' : 'P'
      };
      const mbtiType = result.E + result.S + result.T + result.J;

      // 각 차원별 선호도 점수 계산 (백분율)
      const dimensionScores = [
        Math.round((scores.EI.E / (scores.EI.E + scores.EI.I)) * 100),
        Math.round((scores.SN.S / (scores.SN.S + scores.SN.N)) * 100),
        Math.round((scores.TF.T / (scores.TF.T + scores.TF.F)) * 100),
        Math.round((scores.JP.J / (scores.JP.J + scores.JP.P)) * 100)
      ];
      
      navigate('/result/mbti', { 
        state: { 
          resultType: mbtiType,
          scores: dimensionScores // 차원별 선호도 점수 전달
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
        <h2>질문 {currentQuestion + 1}</h2>
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
    </div>
  );
};

export default MBTITest; 