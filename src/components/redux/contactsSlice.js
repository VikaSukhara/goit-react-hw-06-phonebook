import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';


const contacts = [];

// slice
const slice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      // state.filter = state.filter(task => task.id !== action.payload);

      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactReducer = slice.reducer;

// action = грузовик, який везе дію користувача

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/delete',
//     payload: contactId,
//   };
// };

// export const addContact = ({ name, number }) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// };

/////////////////////////////////////REDUCERS //////////////////////////

// export const contactReducer = (state = { contacts }, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         // та новий масив задач
//         contacts: [
//           ...state.contacts, // в якому є всі існуючі завдання
//           action.payload, // та об'єкт нового завдання
//         ],
//       };
//     }
//     default:
//       return state;
//   }
// };

/////////////////////////////createAction/////////////////////////////

// export const deleteContact = createAction('contacts/delete');
// export const addContact = createAction(
//   'contacts/addContact',
//   ({ name, number }) => {
//     return {
//       payload: {
//         id: nanoid(),
//         name,
//         number,
//       },
//     };
//   }
// );

// console.log(addContact({name: "vika", number:'23233'}))

///////////////////////////createReducer///////////////////////////////

// export const contactReducer = createReducer({ contacts }, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       state.push(action.payload);
//       // return {
//       //   ...state,
//       //   // та новий масив задач
//       //   contacts: [
//       //     ...state.contacts, // в якому є всі існуючі завдання
//       //     action.payload, // та об'єкт нового завдання
//       //   ],
//       // };
//     })
//     .addCase(deleteContact, (state, action) => {
//       state.filter = state.filter(task => task.id !== action.payload);
//     });
// });
