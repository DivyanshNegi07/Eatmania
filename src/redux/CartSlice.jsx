
import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        const existingItem = state.cart.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cart.push({ ...item, quantity: 1 });
        }
    },
    increaseQuantity: (state, action)=>{
        const item = state.cart.find(i=> i.id=== action.payload);
        if(item) item.quantity+=1;
    },
    decreaseQuantity: (state, action)=>{
        const item = state.cart.find(i => i.id === action.payload);
        item.quantity -= 1;
        if (item.quantity <= 0) {
            state.cart = state.cart.filter(i => i.id !== item.id);
        }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(i => i.id !== action.payload);
    },
    clearCart : (state)=>{
      state.cart= [];
    }
  }
})

export const { addToCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  removeFromCart} = CartSlice.actions
  
export default CartSlice.reducer
