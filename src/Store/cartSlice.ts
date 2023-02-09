import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../Components/Layout/ItemList';

type CartTotalType = {
	total: number,
	quantity: number
}
type CartItemType = {
	price: number,
	cartQuantity: number
}

const initialState = localStorage.getItem('cartState')
	? JSON.parse(localStorage.getItem('cartState') || '')
	: {
			cartItems: [],
			cartTotalQuantity: 0,
			cartTotalAmount: 0,
			cartIsOpen: false,
	  };



const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item: ProductType) => item.id === action.payload.id
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
				(item: ProductType) => item.id === action.payload.id
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
		openCart(state) {
			state.cartIsOpen = true;
		},
		toggleCart(state) {
			state.cartIsOpen = !state.cartIsOpen;
		},

		getTotals(state) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal: CartTotalType , cartItem: CartItemType ) => {
					const { price, cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);
			total = parseFloat(total.toFixed(2));
			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const { addToCart, removeFromCart, decreaseCart, getTotals, openCart, toggleCart } =
	cartSlice.actions;
export default cartSlice.reducer;
