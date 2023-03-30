import popUp  from './Slices/popUp';
import { configureStore } from '@reduxjs/toolkit'
import cards  from './Slices/cardsSlice'
import cart from './Slices/cart'
import burger from './Slices/burger'


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