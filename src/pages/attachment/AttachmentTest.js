import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { attachmentQuestions } from '../../data/attachment/questions';
import '../../styles/Test.css';

const AttachmentTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    secure: 0,
    anxious: 0,
    avoidant: 0,
    disorganized: 0
  });

  const handleAnswer = (selfImage, othersImage) => {
    const newScores = { ...scores };
    
    if (selfImage === 'positive' && othersImage === 'positive') {
      newScores.secure += 1;
    } else if (selfImage === 'negative' && othersImage === 'positive') {
      newScores.anxious += 1;
    } else if (selfImage === 'positive' && othersImage === 'negative') {
      newScores.avoidant += 1;
    } else {
      newScores.disorganized += 1;
    }

    if (currentQuestion < attachmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setScores(newScores);
    } else {
      // 점수 계산 및 백분율 변환
      const total = Object.values(newScores).reduce((a, b) => a + b, 0);
      const percentages = Object.values(newScores).map(score => 
        Math.round((score / total) * 100)
      );
      
      // 최고 점수 유형 찾기
      const types = ['secure', 'anxious', 'avoidant', 'disorganized'];
      const maxType = types[percentages.indexOf(Math.max(...percentages))];

      navigate('/result/attachment', { 
        state: { 
          resultType: maxType,
          scores: percentages // 백분율 점수 배열 전달
        } 
      });
    }
  };

  const question = attachmentQuestions[currentQuestion];

  return (
    <div className="test-page attachment-test">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestion + 1) / attachmentQuestions.length * 100}%` }}
        />
      </div>

      <div className="question-container">
        <h2>상황 {currentQuestion + 1}</h2>
        <p className="question-text">{question.scenario}</p>

        <div className="options-container attachment-options">
          {question.responses.map((response, index) => (
            <button
              key={index}
              className="option-button response-button"
              onClick={() => handleAnswer(response.selfImage, response.othersImage)}
            >
              {response.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttachmentTest; 