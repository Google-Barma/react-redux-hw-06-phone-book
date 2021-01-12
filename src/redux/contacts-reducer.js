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

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return state.filter(contact =>
        contact.name.toLowerCase().includes(payload.value.toLowerCase()),
      );
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
