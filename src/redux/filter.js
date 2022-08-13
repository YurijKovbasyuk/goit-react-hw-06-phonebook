import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'test initialState',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (action, state) => {
      state.value = action.payload;

      console.log(action);
      console.log(state.value);
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
