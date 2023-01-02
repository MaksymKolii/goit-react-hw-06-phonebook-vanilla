export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filters/filter':
      return [payload];

    default:
      return state;
  }
};
