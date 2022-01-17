import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';
// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return  ;

//     default:
//       return state;
//   }
// };
// const filterReducer = (state = '', { type, payload }) => {
//   return state;
// };

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { addContacts, addFilter, dellContacts } from './phonebook-actions';

const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
