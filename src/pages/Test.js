import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Test.css';

// MBTI 문항 데이터 (4문항)
const mbtiQuestions = [
  { 
    id: 1, 
    text: "새로운 사람들과 만나는 것이 즐겁다",
    type: "E",
    opposite: "I"
  },
  { 
    id: 2, 
    text: "미래의 가능성보다 현재의 사실에 집중한다",
    type: "S",
    opposite: "N"
  },
  { 
    id: 3, 
    text: "논리적인 판단이 감정적인 판단보다 중요하다",
    type: "T",
    opposite: "F"
  },
  { 
    id: 4, 
    text: "계획을 세우고 그대로 실행하는 것이 좋다",
    type: "J",
    opposite: "P"
  }
];

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();
  const [scores, setScores] = useState({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });

  const handleAnswer = (score) => {
    const question = mbtiQuestions[currentQuestion];
    const normalizedScore = score - 3; // 1~5점을 -2~2점으로 변환
    
    setScores(prev => ({
      ...prev,
      [question.type]: prev[question.type] + normalizedScore,
      [question.opposite]: prev[question.opposite] - normalizedScore
    }));

    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // 모든 질문이 끝나면 결과 페이지로 이동
      navigate('/result', { state: { scores } });
    }
  };

  return (
    <div className="test">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${(currentQuestion + 1) * (100 / 4)}%` }}
        ></div>
      </div>
      
      <h2>질문 {currentQuestion + 1}</h2>
      <p className="question-text">{mbtiQuestions[currentQuestion].text}</p>
      
      <div className="answers">
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
  );
};

export default Test; 