// import types from './contacts-types';
import { nanoid } from 'nanoid';

// const addContact = data => ({
//   type: types.ADD,
//   payload: {
//     id: nanoid(),
//     data,
//   },
// });

// const deleteContact = userId => ({
//   type: types.DELETE,
//   payload: userId,
// });

// export default { addContact, deleteContact };

import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => ({
  payload: {
    id: nanoid(),
    data,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

export default { addContact, deleteContact, changeFilter };
