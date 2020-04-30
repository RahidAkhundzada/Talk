const DATA = 'DATA';

const initialState = {
  data: [],
};

export const ReducerNote = (state = initialState, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};
