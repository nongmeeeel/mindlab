import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Test.css';
import { attachmentQuestions } from '../../data/attachment/questions';
import { calculateAttachment } from '../../data/attachment/calculator';

const AttachmentTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < attachmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const result = calculateAttachment(newAnswers);
      navigate('/result/attachment', { 
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
            style={{ width: `${(currentQuestion + 1) / attachmentQuestions.length * 100}%` }}
          ></div>
        </div>

        <div className="question-section">
          <h2>질문 {currentQuestion + 1}</h2>
          <p className="question-text">{attachmentQuestions[currentQuestion].text}</p>
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

export default AttachmentTest; 