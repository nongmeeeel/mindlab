export const calculateMBTI = (scores) => {
  const type = [];
  type.push(scores.E > scores.I ? 'E' : 'I');
  type.push(scores.S > scores.N ? 'S' : 'N');
  type.push(scores.T > scores.F ? 'T' : 'F');
  type.push(scores.J > scores.P ? 'J' : 'P');
  return type.join('');
}; 