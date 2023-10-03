import { createSlice } from '@reduxjs/toolkit';

const filterInitioal = '';

const slice = createSlice({
  name: 'filter',
  initialState: filterInitioal,
  reducers: {
    filter: {
      reducer(state, action) {
        // const filteredUsers = state.contacts.filter(contact => {
        //   return contact.name
        //     .toLocaleLowerCase()
        //     .includes(action.payload.toLocaleLowerCase());
        // });
        return action.payload;
        // state.contacts =  filteredUsers;
      },
    },
  },
});

export const { filter } = slice.actions;
export const filterReducer = slice.reducer;

///////////////////////////////ACTION////////////////////////

// export const filter = searchName => {
//     return {
//       type: 'filter/change',
//       payload: searchName,
//     };
//   };

// export const filter = createAction('filter/change');

// // //////////////////// REDUCER/////////////////////////////////////

//   export const filterReducer = (state = { filters: '' }, action) => {
//   switch (action.type) {
//     case 'filter/change': {
//       const filteredUsers = state.contacts.filter(contact => {
//         return contact.name
//           .toLocaleLowerCase()
//           .includes(action.payload.toLocaleLowerCase());
//       });
//       return {
//         ...state,
//         filters: action.payload,
//         contacts: filteredUsers,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const filterReducer = createReducer({ filters: '' }, (builder) =>{
//   builder.addCase(filter,(state, action) => {
//     const filteredUsers = state.contacts.filter(contact => {
//       return contact.name
//         .toLocaleLowerCase()
//         .includes(action.payload.toLocaleLowerCase());
//     });
//     return {
//       ...state,
//       filters: action.payload,
//       contacts: filteredUsers,
//     };
//   } )
// });
