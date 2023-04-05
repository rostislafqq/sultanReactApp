import { useSelector } from "react-redux"
import Sidebar from "./sidebar"
import { RootState } from "../../../store/store"
import { IManuf } from "../../../types/card"
import {useCallback, useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setManufParam } from "../../../store/Slices/cardsSlice"
import { setBurger } from "../../../store/Slices/burgerSlice"

const SidebarContainer =() =>{
    const dispatch = useDispatch()
    const manufactures=useSelector((state:RootState) => state.cards.manufactures)
    const [inputManuf,setInputManuf] = useState<string>('')
    const [manufRender,setManufRender] = useState<IManuf[]>([])

    //input поиск производителя
    const manufFinter = useCallback(
      () => {
        if (inputManuf.length>0){
            setManufRender(manufactures.filter((v)=>{
                if (v.manuf.toLowerCase().includes(inputManuf.toLocaleLowerCase())) return true
                else return false
            }))
        }
      },
      [inputManuf,manufactures],
    )
    //постоянное обновление состояния
    useEffect(()=>{
        setManufRender(manufactures)
    },[manufactures])


    //обнуляем
   useEffect(()=>{
    if(inputManuf.length===0){
        setManufRender(manufactures) 
    }
   },[inputManuf])

   
   //цена 
   const [costMin,setCostMin] = useState(0)
   const [costMax,setCostMax] = useState(1000)
   
//применить фильтры
const show =useCallback(()=>{
    dispatch(setManufParam({costMin,costMax}))
    dispatch(setBurger(true))
   },[dispatch,costMin,costMax])
   
    return(
        <Sidebar  costMin={costMin} costMax={costMax} setCostMin={setCostMin} setCostMax={setCostMax} show={show} manufFinter={manufFinter} inputManuf={inputManuf} setInputManuf={setInputManuf} manufRender={manufRender} />
    )
}

export default SidebarContainer