const MOV1 = 'MOV1';
const MOV2 = 'MOV2';
const MOV3 = 'MOV3';

const initialState = {
  data: [],
  text: 'a',
  url: 'http://api.tvmaze.com/search/shows?q=',
};

export const ReducerMovie = (state = initialState, action) => {
  switch (action.type) {
    case MOV1:
      return {
        ...state,
        data: action.data,
      };
    case MOV2:
      return {
        ...state,
        text: action.text,
      };
    case MOV3:
      return {
        ...state,
        url: action.url,
      };

    default:
      return state;
  }
};
