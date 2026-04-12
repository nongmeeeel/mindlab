
// MBTI 유형별 점수 계산
export const calculateMBTIScores = (answers) => {
  const scores = {
    EI: { I: 0, E: 0 },
    SN: { N: 0, S: 0 },
    TF: { F: 0, T: 0 },
    JP: { P: 0, J: 0 }
  };

  // 각 답변에 대한 점수 계산
  Object.entries(answers).forEach(([questionId, answer]) => {
    const { dimension, type } = answer;
    scores[dimension][type] += 1;
  });

  // 각 지표별 선호도 점수 계산 (-100 ~ 100)
  const preferenceScores = {
    EI: calculatePreference(scores.EI.E, scores.EI.I),  // + = E, - = I
    SN: calculatePreference(scores.SN.S, scores.SN.N),  // + = S, - = N
    TF: calculatePreference(scores.TF.T, scores.TF.F),  // + = T, - = F
    JP: calculatePreference(scores.JP.J, scores.JP.P)   // + = J, - = P
  };

  return preferenceScores;
};

// 선호도 점수 계산 함수 (-100 ~ 100)
const calculatePreference = (score1, score2) => {
  const total = score1 + score2;
  if (total === 0) return 0;
  return Math.round(((score1 - score2) / total) * 100);
};

// MBTI 유형 결정
export const determineMBTIType = (scores) => {
  return {
    EI: scores.EI > 0 ? 'E' : 'I',
    SN: scores.SN > 0 ? 'S' : 'N',
    TF: scores.TF > 0 ? 'T' : 'F',
    JP: scores.JP > 0 ? 'J' : 'P'
  };
}; 