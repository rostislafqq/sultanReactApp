import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface burger {
    burgerActive:boolean
}


const initialState: burger = {
    burgerActive:true

} as burger

export const cartSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setBurger: (state:burger, action: PayloadAction<boolean>) => {
     state.burgerActive = action.payload
    },
},


 
})


export const { setBurger} = cartSlice.actions

export default cartSlice.reducer