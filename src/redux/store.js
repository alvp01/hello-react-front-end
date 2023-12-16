import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;