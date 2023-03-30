import { useEffect, useState } from "react"
import Chose from "./chose"
import s from './chose.module.scss'
import { useDispatch } from "react-redux"
import { fetchTypeCards } from "../../../store/Slices/cardsSlice"

const ChoseContainer =()=>{
    const [choseItem, setChoseItem] = useState<string[]>(['Уход за телом','Уход за руками','Уход за ногами',
'Уход за лицом', 'Уход за волосами','Средства для загара','Средства для бритья','Подарочные наборы','Гигиеническая продукция' ,'Гигиена полости рта','Бумажная продукция'])
     //для запроса на серве
    const [chosen,setChosen] = useState('')
    const dispath = useDispatch()
    useEffect(()=>{
        dispath(fetchTypeCards(chosen))
    },[chosen])

    return(
        <ul className={s.container}>
            {choseItem.map((e,i)=> <Chose key={i} chosen={chosen} setChosen={setChosen} choseItem={e}/>)}
        </ul>
    )
}

export default ChoseContainer