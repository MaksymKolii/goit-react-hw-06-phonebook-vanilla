// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

// const filtersInitialState = {
//   filter: '',
// };

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filters/filter':
      return [payload];

    default:
      return state;
  }
};

// export const filterReducer = createReducer(filtersInitialState, {

//   [setFilter]: (state, {payload}) => state= payload
// })
