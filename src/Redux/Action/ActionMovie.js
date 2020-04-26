export const AData = value => {
  return {
    type: 'MOV1',
    data: value,
  };
};
export const AText = value => {
  return {
    type: 'MOV2',
    text: value,
  };
};
export const AUrl = value => {
  return {
    type: 'MOV3',
    url: value,
  };
};
