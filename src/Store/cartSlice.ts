import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../Components/Layout/ItemList';
const initialState = localStorage.getItem('cartState')
	? JSON.parse(localStorage.getItem('cartState') || '')
	: {
			cartItems: [],
			cartTotalQuantity: 0,
			cartTotalAmount: 0,
	  };

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState as any,
	reducers: {
		addToCart(state, action) {
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
			localStorage.setItem('cartState', JSON.stringify(state));
		},
		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				(cartItem: ProductType) => cartItem.id !== action.payload.id
			);

			state.cartItems = nextCartItems;

			localStorage.setItem('cartState', JSON.stringify(state));
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item: any) => item.id === action.payload.id
			);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(
					(cartItem: ProductType) => cartItem.id !== action.payload.id
				);

				state.cartItems = nextCartItems;
			}
			state.cartTotalQuantity -= 1;
			localStorage.setItem('cartState', JSON.stringify(state));
		},

		getTotals(state, action) {}
	},
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
