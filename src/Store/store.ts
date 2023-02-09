import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { getTotals } from './cartSlice';

const store = configureStore({ reducer: { cart: cartSlice } });


store.dispatch(getTotals());

export default store;

export type RootState = ReturnType<typeof store.getState>
