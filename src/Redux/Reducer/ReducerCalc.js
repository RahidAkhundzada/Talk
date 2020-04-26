const CALC1 = 'CALC1';
const CALC2 = 'CALC2';

const initialState = {
  operateText: '',
  resultText: '',
  dot: true,
};

export const ReducerCalc = (state = initialState, action) => {
  switch (action.type) {
    case CALC1:
      return {
        ...state,
        operateText: action.operateText,
      };
    case CALC2:
      return {
        ...state,
        resultText: action.resultText,
      };

    default:
      return state;
  }
};
