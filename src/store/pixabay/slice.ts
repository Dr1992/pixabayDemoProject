import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {initialState} from './types';
import {IPixabay} from '../../services/pixabay/types';

export const pixabaySlice = createSlice({
  name: 'pixabay',
  initialState,
  reducers: {
    fetchPixabayInit: state => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },

    fetchPixabaySuccess: (state, action: PayloadAction<IPixabay[]>) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.hits = action.payload;
    },

    fetchPixabayError: state => {
      state.loading = false;
      state.error = true;
      state.success = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {fetchPixabayInit, fetchPixabaySuccess, fetchPixabayError} =
  pixabaySlice.actions;

export default pixabaySlice.reducer;
