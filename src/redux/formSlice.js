import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step1: {},
  step2: {},
  step3: {}
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitStep1: (state, action) => {
      state.step1 = action.payload;
    },
    submitStep2: (state, action) => {
      state.step2 = action.payload;
    },
    submitStep3: (state, action) => {
      state.step3 = action.payload;
    }
  }
});

export const { submitStep1, submitStep2, submitStep3 } = formSlice.actions;

export default formSlice.reducer;
