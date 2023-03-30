import React from 'react'
import { IManuf } from '../../../types/card'
import { useDispatch } from 'react-redux'
import { setChecked } from '../../../store/Slices/cardsSlice'
import {useState,useEffect} from 'react'

export const Checkbox:React.FC<IManuf> = ({manuf,count , checked}) => {
 const dispatch = useDispatch()
 const [check, setCheck] = useState<boolean>(false)

 useEffect(() => {
    dispatch(setChecked([{manuf,check}]))
 }, [check])
 
  return (
    <><input onChange={(e)=>{
      setCheck(e.target.checked)
    }} type="checkbox"  id={manuf} />
    <label htmlFor={manuf}>{manuf} ({count})</label><br/></>
  )
}
