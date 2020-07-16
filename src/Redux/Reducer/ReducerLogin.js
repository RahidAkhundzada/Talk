const LOGIN = 'LOGIN';

const initialState = {
  login: false,
};

export const ReducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
};
