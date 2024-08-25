import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../TaskSlice/TaskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
