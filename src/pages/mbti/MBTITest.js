import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mbtiQuestions } from '../../data/mbti/questions';
import { calculateMBTI } from '../../data/mbti/calculator';
import '../../styles/Test.css';

const MBTITest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });

  const handleAnswer = (score) => {
    const question = mbtiQuestions[currentQuestion];
    const normalizedScore = score - 3; // 1~5를 -2~2로 변환

    setScores(prev => ({
      ...prev,
      [question.type]: prev[question.type] + normalizedScore,
      [question.opposite]: prev[question.opposite] - normalizedScore
    }));

    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const result = calculateMBTI(scores);
      navigate('/result/mbti', { 
        state: { resultType: result } 
      });
    }
  };

  return (
    <div className="test-container">
      <div className="test-content">
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${(currentQuestion + 1) / mbtiQuestions.length * 100}%` }}
          ></div>
        </div>

        <div className="question-section">
          <h2>질문 {currentQuestion + 1}</h2>
          <p className="question-text">{mbtiQuestions[currentQuestion].text}</p>
        </div>

        <div className="answers-section">
          <div className="scale-labels">
            <span>전혀 아니다</span>
            <span>매우 그렇다</span>
          </div>
          <div className="answer-buttons">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleAnswer(score)}
                className="answer-button"
              >
                {score}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBTITest; 