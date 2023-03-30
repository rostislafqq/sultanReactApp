import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import { ICardStatic } from "../../types/card"
import axios from "axios"
import OpenCard from "./openCard"
import loading from '../../assets/loading.gif'
import s from './openCard.module.scss'

const OpenCardContainer = ()=>{
    const {barcode} = useParams()
    const [card,setCard] = useState<ICardStatic[]>([])

    const [ introStatus,setIntroStatus] = useState<boolean>(true)
    const [ speci,setSpeci] = useState<boolean>(true)

    useEffect(()=>{
        const getCards = async ()=>{
            const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?barcode=${barcode}`)
            const data = await res.data
            setCard(data)
        }
        getCards()
    },[barcode])
    return(
        <>
        {card.length>0?<OpenCard introStatus={introStatus} speci={speci} setIntroStatus={setIntroStatus} setSpeci={setSpeci} intro={card[0].intro} cost={card[0].cost} brand={card[0].brand} manuf={card[0].manuf} barcode={card[0].barcode} sizeType={card[0].sizeType} size={card[0].size} name={card[0].name} img={card[0].img}/>:<img className={s.load} src={loading} alt="load"/>}
        </>
    )
}

export default OpenCardContainer
