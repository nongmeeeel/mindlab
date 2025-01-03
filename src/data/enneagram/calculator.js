export const calculateEnneagram = (scores) => {
  let maxScore = -Infinity;
  let maxType = null;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  });

  return maxType;
}; 