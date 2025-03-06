import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enneagramQuestions } from '../../data/enneagram/questions';
import { calculateEnneagramScores } from '../../data/enneagram/calculator';
import '../../styles/Test.css';
import AdBanner from '../../components/AdBanner';

const EnneagramTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: {
        questionId: currentQuestion,
        value: value
      }
    };
    
    if (currentQuestion < enneagramQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setAnswers(newAnswers);
      setSelectedOption(null);  // 다음 문항으로 넘어갈 때 선택 상태 초기화
    } else {
      const result = calculateEnneagramScores(newAnswers);
      
      navigate('/result/enneagram', {
        state: {
          resultType: result.type,
          scores: Object.values(result.scores)
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
        <p className="question-text">{question.text}</p>

        <div className="scale-indicator">
          <span>매우 아니다</span>
          <span>매우 그렇다</span>
        </div>

        <div className="options-container enneagram-options">
          {[
            { value: 0, label: '1' },
            { value: 1, label: '2' },
            { value: 2, label: '3' },
            { value: 3, label: '4' },
            { value: 4, label: '5' }
          ].map((option, index) => (
            <button 
              key={index}
              className={`option-button ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => { 
                setSelectedOption(index);
                handleAnswer(option.value);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <AdBanner />
    </div>
  );
};

export default EnneagramTest; 