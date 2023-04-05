import s from './sidebar.module.scss'
import bin from '../../../assets/bin.svg'
import lins from '../../../assets/search.svg'
import { IManuf } from '../../../types/card'
import { Checkbox } from './checkbox'
import { useDispatch } from 'react-redux'
import { deleteManufParam, fetchTypeCards } from '../../../store/Slices/cardsSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

interface PropsSidebar{
    manufRender:IManuf[],
    inputManuf:string,
    setInputManuf:React.Dispatch<React.SetStateAction<string>>
    manufFinter:() => void,
    show:() => void,
    costMin:number,
    costMax:number,
    setCostMin:React.Dispatch<React.SetStateAction<number>>,
    setCostMax:React.Dispatch<React.SetStateAction<number>>,
     
}

const Sidebar:React.FC<PropsSidebar > =({costMin,setCostMin,setCostMax,costMax,show,manufFinter,manufRender,inputManuf,setInputManuf})=>{
   const dispatch = useDispatch()

   //burger 
   const burgerActive = useSelector((state:RootState)=>state.burger.burgerActive)
    return(
        <aside className={window.innerWidth<=650&&burgerActive?s.none: s.sidebar}>
            <h2 className={s.header}>
            ПОДБОР ПО ПАРАМЕТРАМ
            </h2>
            <p className={s.cost}>Цена <span className={s.val}>₸</span></p>
            <div className={s.costContainer}>
                <input onChange={(e)=>{
                    setCostMin(Number(e.target.value))
                }} value={costMin} max={costMax} min={0} className={`${s.costInput} ${s.costInput__first}`} type="number"   />
                <span className={s.dash}>-</span>
                <input onChange={(e)=>{
                    setCostMax(Number(e.target.value))
                    console.log(costMax)
                }} value={costMax} min={costMin} className={`${s.costInput} ${s.costInput__second}`} type="number"   />
            </div>
            <h2 className={s.manuf}>Производитель</h2>
            <div className={s.lins}>
            <input value={inputManuf} onChange={(e)=>{
                setInputManuf(e.target.value)
                if(e.target.value.length===0)manufFinter()

            }} className={s.manufInput} type="text" placeholder='Поиск...'/>
            <button><img onClick={()=>manufFinter()} src={lins} alt="линза" /></button>
            </div>
            
            <div className={s.manufCheckContainer}>
                {
                    manufRender.map((v)=>
                    <Checkbox key={v.manuf} checked={v.checked} manuf={v.manuf} count={v.count}/>)
                  
                }
            </div>
            <div className={s.showContainer}>
            <button onClick={()=>{
                show()
            }} className={s.show}>Показать</button>
            <span><img onClick={()=>{
                setInputManuf('')
                dispatch(deleteManufParam())
           
            }} className={s.bin} src={bin} alt="bin" /></span> 
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Уход за телом'))
            }} className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Уход за телом
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                    <li className={s.sidebarChoseItem}>Эпиляция и депиляция</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Уход за руками'))
            }} className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Уход за руками
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                    <li className={s.sidebarChoseItem}>Увлажнение и питание</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Уход за ногами'))
            }} className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Уход за ногами
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Скрабы, пилинги</li>
                    <li className={s.sidebarChoseItem}>Скрабы, пилинги</li>
                    <li className={s.sidebarChoseItem}>Скрабы, пилинги</li>
                    <li className={s.sidebarChoseItem}>Скрабы, пилинги</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Уход за лицом'))
            }}  className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Уход за лицом
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                    <li className={s.sidebarChoseItem}>Тональные средства</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Уход за волосами'))
            }}  className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Уход за волосами
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Шампуни</li>
                    <li className={s.sidebarChoseItem}>Шампуни</li>
                    <li className={s.sidebarChoseItem}>Шампуни</li>
                    <li className={s.sidebarChoseItem}>Шампуни</li>
                    <li className={s.sidebarChoseItem}>Шампуни</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Средства для загара'))
            }} className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Средства для загара
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Средства для загара</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Средства для бритья'))
            }} className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Средства для бритья
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Станки и кассеты</li>
                    <li className={s.sidebarChoseItem}>Станки и кассеты</li>
                    <li className={s.sidebarChoseItem}>Станки и кассеты</li>
                </ul>
            </div>
            <div onClick={()=>{
                 dispatch(fetchTypeCards('Подарочные наборы'))
            }} className={s.sidebarChose}>
                <h2 className={s.sidebarChoseHeader}>
                Подарочные наборы
                </h2>
                <ul className={s.sidebarChoseItems}>
                    <li className={s.sidebarChoseItem}>Для мужчин</li>
                    <li className={s.sidebarChoseItem}>Для мужчин</li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar