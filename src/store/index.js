import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import songsReducer from './slices/songsSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    songs: songsReducer,
  },
});
