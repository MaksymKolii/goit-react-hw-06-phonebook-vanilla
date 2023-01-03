const initialState = '';

export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'filters/filter':
      return [payload];

    default:
      return state;
  }
};
