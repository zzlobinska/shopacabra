import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	cartItems: [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState as any,
	reducers: {
		addToCart(state, action: any) {
			const itemIndex = state.cartItems.findIndex(
				(item: any) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);
			}
			state.cartTotalQuantity += 1;
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
