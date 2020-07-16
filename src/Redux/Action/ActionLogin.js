export const isLogged = value => {
  return {
    type: 'LOGIN',
    payload: value,
  };
};
