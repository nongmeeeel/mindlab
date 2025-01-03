import { attachmentQuestions } from './questions';

export const calculateAttachment = (answers) => {
  let anxiety = 0;
  let avoidance = 0;
  let secure = 0;

  answers.forEach((answer, index) => {
    const question = attachmentQuestions[index];
    const score = answer;

    if (question.type === "anxiety") anxiety += score;
    if (question.type === "avoidance") avoidance += score;
    if (question.type === "secure") secure += score;
  });

  if (secure > anxiety && secure > avoidance) return "secure";
  if (anxiety > avoidance) return "anxious";
  return "avoidant";
}; 