import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enneagramQuestions } from '../../data/enneagram/questions';
import '../../styles/Test.css';

const EnneagramTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    type1: 0, type2: 0, type3: 0, type4: 0, type5: 0,
    type6: 0, type7: 0, type8: 0, type9: 0
  });

  const handleAnswer = (value) => {
    const question = enneagramQuestions[currentQuestion];
    const newScores = { ...scores };

    question.impacts.forEach(impact => {
      newScores[`type${impact.type}`] += impact.weight * (value / 4);
    });

    if (currentQuestion < enneagramQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setScores(newScores);
    } else {
      // 결과 계산
      const scoresArray = Object.values(newScores);
      const mainType = Object.entries(newScores)
        .reduce((a, b) => b[1] > a[1] ? b : a)[0]
        .replace('type', '');

      navigate('/result/enneagram', { 
        state: { 
          resultType: parseInt(mainType),
          scores: scoresArray
        } 
      });
    }
  };

  const question = enneagramQuestions[currentQuestion];

  return (
    <div className="test-page enneagram-test">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestion + 1) / enneagramQuestions.length * 100}%` }}
        />
      </div>

      <div className="question-container">
        <h2>질문 {currentQuestion + 1}</h2>
        <p className="question-text">{question.text}</p>

        <div className="options-container enneagram-options">
          {[0, 1, 2, 3, 4].map((value) => (
            <button
              key={value}
              className="option-button scale-button"
              onClick={() => handleAnswer(value)}
            >
              {value === 0 && "매우 아니다"}
              {value === 1 && "아니다"}
              {value === 2 && "보통이다"}
              {value === 3 && "그렇다"}
              {value === 4 && "매우 그렇다"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnneagramTest; 