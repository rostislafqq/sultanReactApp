import React, { useEffect } from 'react';
import Header from './components/header/headerContainer';
import s from './App.module.scss'
import Catalog from './components/catalog/catalogContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import { useDispatch } from 'react-redux';
import { fetchCards, fetchTotalCards } from './store/Slices/cardsSlice';
import type {} from 'redux-thunk/extend-redux';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import { setPopUp } from './store/Slices/popUpSlice';
import OpenCardContainer from './components/openCard/openCardContainer';
import CartContainer from './components/cart/cartContainer';
import FormalizeContainer from './components/formalize/formalizeContainer';
import AdminContainer from './components/adminPanel/adminContainer';


function App() {
  const dispatch = useDispatch()
  const paginationActive=useSelector((state:RootState) => state.cards.paginationActive)
  const chosenItem = useSelector((state:RootState) => state.cards.chosenItem)
  const order = useSelector((state:RootState) => state.cards.order)
  const manufParam = useSelector((state:RootState)=>state.cards.manufParam)
  const maxCost = useSelector((state:RootState)=>state.cards.maxCost)
  const minCost = useSelector((state:RootState)=>state.cards.minCost)
  //принимаем динамически карточки
  useEffect(()=>{
    dispatch(fetchCards([
      {
        paginationActive,
          chosenItem,
          order,
          manufParam,
          maxCost,
          minCost
      }
      
    ]))
  },[dispatch,paginationActive,chosenItem,order,manufParam,minCost,maxCost])

  //карточки для пагинации и фильтров
  useEffect(()=>{
    dispatch(fetchTotalCards())
  },[dispatch])

  return (
    <div onClick={()=>{
      dispatch(setPopUp(false))
    }} className={s.modul}>
      <Header/>
      <main className={s.container}>
       <Routes>
          <Route path='*' element={<Navigate to='/sultanReactApp/catalog'/>}/>
          <Route path="/sultanReactApp/catalog" element={<Catalog />} />
          <Route path='/sultanReactApp/catalog/:barcode' element={<OpenCardContainer />}/>
          <Route path='/sultanReactApp/cart' element={<CartContainer />}/>
          <Route path='/sultanReactApp/cart/formalize' element={<FormalizeContainer/>}/>
          <Route path='/sultanReactApp/admin' element={<AdminContainer />}/>
       </Routes> 
      </main>
      <Footer />
    </div>
  
  );
}

export default App;
