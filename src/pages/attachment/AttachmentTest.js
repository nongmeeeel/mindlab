import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { attachmentQuestions } from '../../data/attachment/questions';
import { calculateAttachmentScores } from '../../data/attachment/calculator';
import '../../styles/Test.css';
import AdBanner from '../../components/AdBanner';

const AttachmentTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);  // 현재 문제의 선택된 옵션

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: {
        questionId: currentQuestion,
        value: value
      }
    };
    
    if (currentQuestion < attachmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setAnswers(newAnswers);
      setSelectedOption(null);  // 다음 문제로 넘어갈 때 선택 상태 초기화
    } else {
      // 최종 점수 계산
      const result = calculateAttachmentScores(newAnswers);
      
      // 결과 페이지로 이동
      navigate('/result/attachment', {
        state: {
          resultType: result.type,
          scores: result.scores
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
              className={`option-button response-button ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => {
                setSelectedOption(index);
                handleAnswer(index + 1);
              }}
            >
              {response.text}
            </button>
          ))}
        </div>
      </div>
      <AdBanner />
    </div>
  );
};

export default AttachmentTest; 