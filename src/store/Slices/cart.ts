import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Cart {
    cards:ICardsCart[],
    totalCost: number,
    totalCount:number
}


const initialState: Cart = {
   cards:[],
   totalCost:0,
   totalCount:0
} as Cart

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    setTotalCost:(state:Cart)=>{
        state.totalCost=state.cards.reduce((acc,v)=>{
           return acc+=v.cost*v.count
        },0)
        state.totalCount=state.cards.reduce((acc,v)=>{
           return acc+=v.count
        },0)
    },
    addCardStore:(state:Cart,action:PayloadAction<ICardsCart>)=>{
        const foundItem = state.cards.find((item)=>item.barcode === action.payload.barcode
        )
        if(foundItem){
            foundItem.count+=action.payload.count
        }else{
            state.cards.push({
                ...action.payload,
                count:action.payload.count
            })
        }
    },
    removeCount:(state:Cart,action:PayloadAction<number>)=>{
        const foundItem = state.cards.find((item)=>item.barcode === action.payload
        )
        if(foundItem && foundItem.count>0){
            foundItem.count--
        }
        if(foundItem &&foundItem.count===0){
            state.cards= state.cards.filter((v) => foundItem.barcode!==v.barcode)
        }
    },
    plusCount:(state:Cart,action:PayloadAction<number>)=>{
        const foundItem = state.cards.find((item)=>item.barcode === action.payload
        )
        if(foundItem){
            foundItem.count++
        }
    },
    deliteItem:(state:Cart,action:PayloadAction<number>)=>{
        const foundItem = state.cards.find((item)=>item.barcode === action.payload
        )
        if(foundItem){
            state.cards= state.cards.filter((v) => foundItem.barcode!==v.barcode)
        }
    },
    deliteAllCart:(state:Cart)=>{
        state.cards = []
    }
},


 
})


export const {deliteAllCart, setTotalCost,addCardStore,removeCount,plusCount,deliteItem} = cartSlice.actions

export default cartSlice.reducer