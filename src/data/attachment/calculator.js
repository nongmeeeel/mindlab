import { attachmentQuestions } from './questions';

export const calculateAttachmentScores = (answers) => {
  // 자기 이미지와 타인 이미지 각각의 점수 계산
  const scores = {
    self: 0,    // 자기 이미지 점수 (positive: +1, negative: -1)
    others: 0   // 타인 이미지 점수 (positive: +1, negative: -1)
  };

  Object.values(answers).forEach(answer => {
    const question = attachmentQuestions[answer.questionId];
    const response = question.responses[answer.value - 1];

    // 자기 이미지 점수 계산
    scores.self += response.selfImage === 'positive' ? 1 : -1;
    // 타인 이미지 점수 계산
    scores.others += response.othersImage === 'positive' ? 1 : -1;
  });

  // 애착유형 결정
  const type = determineAttachmentType(scores.self, scores.others);

  return {
    scores,
    type
  };
};

const determineAttachmentType = (selfScore, othersScore) => {
  if (selfScore >= 0 && othersScore >= 0) return 'secure';      // 안정형
  if (selfScore < 0 && othersScore >= 0) return 'anxious';      // 불안형
  if (selfScore >= 0 && othersScore < 0) return 'avoidant';     // 회피형
  return 'disorganized';                                        // 혼란형
}; 