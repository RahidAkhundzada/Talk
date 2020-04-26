export const Calculate = value => {
  return {
    type: 'CALC1',
    operateText: value,
  };
};
export const Calculate1 = value => {
  return {
    type: 'CALC2',
    resultText: value,
  };
};
