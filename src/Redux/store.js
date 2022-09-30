import { configureStore } from '@reduxjs/toolkit';
import starshipsSlice from "./slices/starshipsSlice";

export const store = configureStore({
  reducer: {      
    starships:starshipsSlice,
  },  
  
});