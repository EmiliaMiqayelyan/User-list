import { createSlice } from '@reduxjs/toolkit';

export const userstore = createSlice({
  name: 'lists',
  initialState: {
    value: []
  },

  reducers: {
    create: (state, action) => {
      state.value.push(action.payload)
    },

    update(state, action) {
      state.value = state.value.filter((t => t.id !== action.payload.id))
      state.value.push(action.payload);
    },

    remove: (state, action) => {
      state.value = state.value.filter((t => t.id !== action.payload))
    },
  }
});

export const { create, update, remove } = userstore.actions;
export default userstore.reducer;
