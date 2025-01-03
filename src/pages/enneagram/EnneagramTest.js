import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enneagramQuestions } from '../../data/enneagram/questions';
import { calculateEnneagram } from '../../data/enneagram/calculator';
import '../../styles/Test.css';

const EnneagramTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  });

  const handleAnswer = (score) => {
    const question = enneagramQuestions[currentQuestion];
    
    setScores(prev => ({
      ...prev,
      [question.type]: prev[question.type] + (score - 3)
    }));

    if (currentQuestion < enneagramQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const result = calculateEnneagram(scores);
      navigate('/result/enneagram', { 
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
            style={{ width: `${(currentQuestion + 1) / enneagramQuestions.length * 100}%` }}
          ></div>
        </div>

        <div className="question-section">
          <h2>질문 {currentQuestion + 1}</h2>
          <p className="question-text">{enneagramQuestions[currentQuestion].text}</p>
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

export default EnneagramTest; 