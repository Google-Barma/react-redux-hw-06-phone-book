import { combineReducers } from 'redux';
import types from './contacts-types';
import defaultContacts from '../base/defaultContacts';

const contactsReducer = (
  state = JSON.parse(window.localStorage.getItem('contacts')) ??
    defaultContacts,
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
    case types.CHANGE_FILTER:
      return payload.value;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
