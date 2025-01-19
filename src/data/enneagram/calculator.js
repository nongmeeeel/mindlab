import { enneagramQuestions } from "./questions";

// 점수 매핑
const SCORE_MAP = {
  4: 9,  // 매우 그렇다
  3: 7,  // 그렇다
  2: 5,  // 보통이다
  1: 3,  // 아니다
  0: 1   // 매우 아니다
};

export const calculateEnneagramScores = (answers) => {
  // 각 유형별 점수 초기화 (1~9번)
  const scores = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    6: 0, 7: 0, 8: 0, 9: 0
  };

  // 답변을 순회하며 각 유형별 점수 계산
  Object.values(answers).forEach(answer => {
    const { questionId, value } = answer;
    const question = enneagramQuestions[questionId];
    const mappedScore = SCORE_MAP[value];
    
    // 해당 문항이 어떤 유형의 문항인지 확인하고 점수 추가
    scores[question.type] += mappedScore;
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let dominantType = 1;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantType = parseInt(type);
    }
  });

  return {
    type: dominantType,
    scores: scores  // 각 유형별 점수 (최대 45점)
  };
};

export const determineDominantType = (scores) => {
  let maxScore = 0;
  let dominantType = 1;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      dominantType = parseInt(type);
    }
  });

  return dominantType;
}; 