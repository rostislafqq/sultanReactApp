import { costParam } from './../../types/card.d';
import {  } from './cardsSlice';
import { ICardStatic, IFetchCards, IManuf, ISetCheck, ISortCards } from '../../types/card';
import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export interface CardState {
  cards: ICardStatic[];
  cartCost: number ;
  costParam:string;
  manufactures:IManuf[];
  manufParam:string;
  paginationActive:number,
  paginationLength:number,
  cardsTotal:ICardStatic[],
  order:string,
  chosenItem:string,
  maxCost:number,
  minCost:number
}
//динамические карточки (с параметрами)
export const fetchCards =createAsyncThunk<ICardStatic[],IFetchCards[] >(
    'cards/fetchCards',
    async function([{paginationActive,chosenItem,order,manufParam,maxCost,minCost}]) {
        const res =await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=${paginationActive}&limit=15&sortBy=${chosenItem}&order=${order}&manuf=${manufParam}`)
        const data = await res.data.filter((v:ICardsCart)=>v.cost<maxCost&&v.cost>minCost)
        return data
    }
)
//для группировки производителей
export const fetchTotalCards = createAsyncThunk<ICardStatic[]>(
  'cards/fetchTotalCards',
 async function () {
    const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards`)
    const data = await res.data
    return data
  }
)

//выбор типа
export const fetchTypeCards = createAsyncThunk(
  'cards/fetchTypeCards',
  async function (chosen:string) {
    const res =await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=1&limit=15&types=${chosen}`)
    const data = await res.data
    return data
  }
) 

const initialState: CardState = {
cards: [],
cartCost:100,
costParam:'',
manufactures:[],
manufParam:'',
paginationActive:1,
paginationLength:0,
cardsTotal:[],
order:'asc',
chosenItem:'cost',
maxCost:Infinity,
minCost:0

} as CardState

export const cartSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPaginationActive: (state:CardState, action: PayloadAction<number>) => {
      state.paginationActive=action.payload
    },
    setSort:(state:CardState , action:PayloadAction<ISortCards[]>)=>{
      state.order=action.payload[0].order
      state.chosenItem = action.payload[0].chosenItem
    },
    setChecked:(state:CardState, action:PayloadAction<ISetCheck[]>) =>{
      for (let i = 0 ; i<state.manufactures.length;i++){
        if(action.payload[0].manuf === state.manufactures[i].manuf){
          state.manufactures[i].checked = action.payload[0].check
        }
      }
    },
    setManufParam:(state:CardState,action:PayloadAction<costParam>)=>{
      state.manufParam = state.manufactures
      .filter(v => v.checked)
      .map(v => v.manuf)
      .join('|');
      state.maxCost = action.payload.costMax
      state.minCost = action.payload.costMin
      const arr = []
      for(let i = action.payload.costMin ; i<=action.payload.costMax ; i++){
        arr.push(i)
      }
      state.costParam = arr.join('|')
    },  
    deleteManufParam:(state:CardState)=>{
      for(let i = 0 ; i<state.manufactures.length ;i++){
        state.manufactures[i].checked = false
      }
    }
},


 extraReducers(builder) {
     builder.addCase(fetchCards.fulfilled,(state,action)=>{
        state.cards = action.payload
        if(state.paginationActive ===1){
        state.paginationLength=action.payload.length   
        }
     }
     )
     builder.addCase(fetchTotalCards.fulfilled,(state,action)=>{
      state.cardsTotal = action.payload
      state.paginationLength= state.cardsTotal.length
      //группируем по производителю
      state.manufactures=action.payload.reduce((acc:IManuf[], curr) => {
        const found = acc.find(item => item.manuf === curr.manuf);
        if (found) {
          found.count++;
        } else {
          acc.push({manuf: curr.manuf, count: 1,checked:false});
        }
        return acc;
      }, []); 
      
     })
     builder.addCase(fetchTypeCards.fulfilled,(state,action)=>{
        state.cards=action.payload
        if(state.paginationActive ===1){
          state.paginationLength = action.payload.length
        }
        else return
     })
 },
})


export const { setPaginationActive,setSort,setChecked,setManufParam ,deleteManufParam} = cartSlice.actions

export default cartSlice.reducer