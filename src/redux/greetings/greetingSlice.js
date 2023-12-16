import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiEndpoint = 'http://127.0.0.1:3000/random_greeting';

export const getRandomGreeting = createAsyncThunk(
  'greetings/getRandomGreeting',
  async (thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const initialState = {
  greeting: null,
  isLoading: false,
  error: null,
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload;
      })
      .addCase(getRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default greetingsSlice.reducer;
