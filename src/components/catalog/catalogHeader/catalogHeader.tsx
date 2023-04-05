import { Link } from "react-router-dom"
import s from './catalogHeader.module.scss'
import arrow from '../../../assets/arrow.svg'
import PopUp from "./popUp"
import { useDispatch } from "react-redux"
import  { setPopUp } from "../../../store/Slices/popUpSlice"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import {useState,useEffect} from 'react'
import { fetchTypeCards, setSort } from "../../../store/Slices/cardsSlice"
import arrowAd from '../../../assets/arrowAdaptive.svg'

const CatalogHeader = ()=>{
    const dispatch = useDispatch()
    const active = useSelector((state:RootState)=>state.popUp.popUpActive)
    const catigories:string[]  = ['Название(возрастание)','Название(убывание)','Цена(возрастание)','Цена(убывание)']
    const [activeCatigor,setActiveCatigor] = useState('Название')

      //логика сортировки
      const [chosenItem,setChosenItem] = useState<string>('name')
      const [order,setOrder] = useState<string>('asc')

      useEffect(() => {
        dispatch(setSort([
            {
                chosenItem,
                order
            }
        ]))
      }, [order,chosenItem])

      //adaptiv
      const [choseItem, setChoseItem] = useState<string[]>(['Уход за телом','Уход за руками','Уход за ногами',
      'Уход за лицом', 'Уход за волосами','Средства для загара','Средства для бритья','Подарочные наборы','Гигиеническая продукция' ,'Гигиена полости рта','Бумажная продукция'])
      const [listActie,setListActive] = useState(false)
      const [chosen,setChosen] = useState('')
      const dispath = useDispatch()
      useEffect(()=>{
          dispath(fetchTypeCards(chosen))
      },[chosen])

    return(
        <div className={s.container}>
            
            <nav>
                <Link to='/sultanReactApp/' >Главная</Link>
                <Link to='/sultanReactApp/'className={s.active}>Косметика и гигиена</Link>
            </nav>
            <div className={s.headerContainer}>
                <h1 className={s.header}>Косметика и гигиена</h1>
                <div className={s.adaptive}>
                    <div onClick={()=>{
                        setListActive(!listActie)
                    }} className={s.adaptiveHeaderContainer}>
                        <h3 className={s.adapiveHeader}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
                        <img className={listActie?s.adapiveIMGActive:s.adapiveIMG} src={arrowAd} alt="arrowA" />
                    </div>
                    <ul className={listActie?s.adaptiveListActive:s.adaptiveList}>
                        {choseItem.map((v)=><li onClick={()=>{
                            setChosen(v)
                        }} key={v} className={s.adaptiveItem}>{v}</li>)}
                    </ul>
                </div>
                <div onClick={(e)=>{
                     dispatch(setPopUp(!active))
                     e.stopPropagation()
                }} className={s.sort}>
                    <p className={s.sortMain}>Сортировка:</p>
                    <p className={s.sortItem}>{activeCatigor}</p>
                    <img className={active?s.activeArrow:s.arrowCommon} src={arrow} alt="arrow" />
                    <PopUp setOrder={setOrder} setChosenItem={setChosenItem} setActiveCatigor={setActiveCatigor} catigories={catigories}/>
                </div>
            </div>
        </div>
    )
}
export default CatalogHeader