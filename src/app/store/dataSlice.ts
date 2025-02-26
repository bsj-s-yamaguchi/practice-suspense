import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from '../lib/fetchData';

export const fetchDataThunk = createAsyncThunk('data/fetchData', async () => {
  return await fetchData();
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: '',
    loading: false,
  },
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      });
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
