import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface popUp {
    popUpActive:boolean
}


const initialState: popUp = {
    popUpActive:false

} as popUp

export const cartSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    setPopUp: (state:popUp, action: PayloadAction<boolean>) => {
     state.popUpActive = action.payload
    },
},


 
})


export const { setPopUp} = cartSlice.actions

export default cartSlice.reducer