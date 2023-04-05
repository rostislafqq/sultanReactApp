import popUp  from './Slices/popUpSlice';
import { configureStore } from '@reduxjs/toolkit'
import cards  from './Slices/cardsSlice'
import cart from './Slices/cartSlice'
import burger from './Slices/burgerSlice'


export const store = configureStore({
  reducer: {
   cards,
   popUp,
   cart,
   burger
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch