import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, action) => {
      console.log(
        'setContacts value',
        state.value
        // 'setContacts action',
        // action.payload
      );
      state.value = [...state.value, action.payload];
    },
    deleteContacts: (state, action) => {
      console.log('delete', action);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;
