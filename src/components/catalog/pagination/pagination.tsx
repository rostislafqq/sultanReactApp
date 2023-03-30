import { AnyAction, Dispatch } from 'redux'
import s from './pagination.module.scss'
import { setPaginationActive } from '../../../store/Slices/cardsSlice'

interface PaginationProps{
    num:number,
    paginationActive:number,
    dispatch:Dispatch<AnyAction>
}


const Pagination:React.FC<PaginationProps> = ({num,dispatch,paginationActive})=>{
     
    return <li onClick={()=>{
        dispatch(setPaginationActive(num))
    }} className={`${paginationActive === num ? s.active:''}`}>{num}</li>
}

export default Pagination