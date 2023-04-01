import Pagination from "./pagination"
import s from './pagination.module.scss'
import arrow from '../../../assets/pagArrow.svg'
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import {useEffect,useState} from 'react'
import { useDispatch } from "react-redux"
import { setPaginationActive } from "../../../store/Slices/cardsSlice"

const PaginationContainer =() =>{
    const [paginationNums,setPaginationNums] = useState<number[]>([])
    const dispatch = useDispatch()
    const paginationLength=useSelector((state:RootState) => state.cards.paginationLength)
    const paginationActive = useSelector((state:RootState)=>state.cards.paginationActive)
    const pagMaxLength = useSelector((state:RootState)=>state.cards.pagMaxLength)

    //устанавливаем кол-во цифр пагинации
    useEffect(()=>{
        let arr = []
        for(let i = 1 ; i <= Math.floor(paginationLength/15)+1;i++){
            arr.push(i)  
        }
        setPaginationNums(arr)
    },[paginationLength])

    //burger 
   const burgerActive = useSelector((state:RootState)=>state.burger.burgerActive)
    return (
        <ul className={window.innerWidth<=650&&!burgerActive?s.none:s.ul}>
            <li><img onClick={()=>{
                dispatch(setPaginationActive(paginationActive===1?1:paginationActive-1 ))
            }} className={s.left} src={arrow} alt="arrow" /></li>
            {paginationNums.map((v)=><Pagination key={v} dispatch={dispatch} paginationActive={paginationActive} num={v}/>)}
            <li ><img onClick={()=>{
                dispatch(setPaginationActive(paginationActive>=Math.ceil(pagMaxLength/15)?paginationActive:paginationActive+1 ))
            }} className={s.right} src={arrow} alt="arrow" /></li>
        </ul>
    )
}

export default PaginationContainer