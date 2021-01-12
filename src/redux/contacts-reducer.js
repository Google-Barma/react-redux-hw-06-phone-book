import { combineReducers } from 'redux';
import types from './contacts-types';

const contactsReducer = (
  state = JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  { type, payload },
) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(contact => {
        return contact.id !== payload.id;
      });

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  return state;
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
