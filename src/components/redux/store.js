import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 0, name: 'Viks', number: 3975397585758 },
    { id: 1, name: 'Petro', number: 498549894 },
    { id: 2, name: 'Coco', number: 826478246726 },
  ],
  filters: '',
};

// action = грузовик, який везе дію користувача
export const deleteContact = contactId => {
  return {
    type: 'contacts/delete',
    payload: contactId,
  };
};

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const filter = searchName => {
  return {
    type: 'filter/change',
    payload: searchName,
  };
};

// //////////////////// reducers

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        // та новий масив задач
        contacts: [
          ...state.contacts, // в якому є всі існуючі завдання
          action.payload, // та об'єкт нового завдання
        ],
      };
    }
    case 'filter/change': {
      const filteredUsers = state.contacts.filter(contact => {
        return contact.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase());
      });
      return {
        ...state,
        filters: action.payload,
        contacts: filteredUsers,
      };
    }
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
