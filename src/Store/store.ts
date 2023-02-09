import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { getTotals } from './cartSlice';

const store = configureStore({ reducer: { cart: cartSlice } });

// @ts-ignore
store.dispatch(getTotals());

export default store;
