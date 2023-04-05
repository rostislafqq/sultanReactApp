import { Link } from 'react-router-dom'
import s from './openCard.module.scss'
import box from '../../assets/box.svg'
import bottle  from '../../assets/bottle.svg'
import arrow from '../../assets/arrow.svg'
import { IOpenCard } from '../../types/card'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import cart from '../../assets/cartWhite.svg'
import { addCardStore, setTotalCost } from '../../store/Slices/cartSlice'


const OpenCard:React.FC<IOpenCard> = ({introStatus,speci,setIntroStatus,setSpeci,name,size,sizeType,barcode,manuf,brand,cost,intro,img})=>{
    const [count,setCount] = useState<number>(1)
    const dispatch = useDispatch()

    return(
        <div className={s.container}>
            <nav className={s.navigation}>
                <Link to='/sultanReactApp/'>Главная</Link>
                <Link to='/sultanReactApp/catalog'>Каталог</Link>
                <Link to={`/sultanReactApp/catalog/${barcode}`} className={s.linkA}>{name}</Link>
            </nav>
            <div className={s.card}>
                <div className={s.imgCont}>
                  <img src={img} alt="good" />
                </div>
                <div className={s.wrapper}>
                <p className={s.nalich}>В наличии</p>
                <h2 className={s.name}><b>{name.split(' ')[0]}</b> {name.split(' ').slice(1).join(' ')}</h2>
                <div className={s.size}>
                    <img src={sizeType === 'g'? box:bottle} alt="size" />
                    <span>{size}</span>
                </div>
                <div className={s.cart}>
                    <p className={s.cost}>{cost} ₸</p>
                    <div className={s.inputContainer}>
                        <button className={s.btn} onClick={()=>{
                            if(count>1){
                                setCount(count-1)
                            }
                        }}>-</button>
                        <p className={s.placehold}>{count}</p>
                        <button onClick={()=>{
                            setCount(count+1)
                        }} className={s.btn}>+</button>
                         </div>
                        <button onClick={()=>{
                           dispatch(addCardStore({
                            name,
                            size,
                            sizeType,
                            barcode,
                            manuf,
                            brand,
                            cost,
                            img,
                            intro,
                            count
                        }))
                        dispatch(setTotalCost()) 
                        }} className={s.addCart}>В корзину <img src={cart} alt="cart" /></button>
                   
                </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Производитель:</p><span className={s.commonBold}>{manuf}</span>
                    </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Бренд:</p><span className={s.commonBold}>{brand}</span>
                    </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Артикул:</p><span className={s.commonBold}>{barcode}</span>
                    </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Штрихкод:</p><span className={s.commonBold}>{barcode}</span>                        
                    </div>  
                    <div onClick={()=>{
                        setIntroStatus(!introStatus)
                    }} className={s.introHeaderContainer}>
                        <h3 className={s.introHeader}>Описание</h3>
                        <img className={!introStatus?s.arrow:s.arrowA} src={arrow} alt="arrow" />
                    </div>
                    
                    <p className={introStatus?s.intro:s.none}>
                        {intro}
                    </p>
                    <div onClick={()=>{
                        setSpeci(!speci)
                    }} className={s.specifHeader}>
                        <h3 className={s.specif}>Характеристики </h3>
                        <img className={!speci?s.arrow:s.arrowA} src={arrow} alt="arrow" />
                    </div>
                    
                    <div  className={speci?s.specifContainer:s.none}>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Производитель:</p><span className={s.commonBold}>{manuf}</span>
                    </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Бренд:</p><span className={s.commonBold}>{brand}</span>
                    </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Артикул:</p><span className={s.commonBold}>{barcode}</span>
                    </div>
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Штрихкод:</p><span className={s.commonBold}>{barcode}</span>                        
                    </div> 
                    <div className={s.comminCont}>
                        <p className={s.commonIntro}>Вес:</p><span className={s.commonBold}>{size}</span>                        
                    </div>
                    </div>
                </div>
                </div>
              
            </div>
       
    )
}

export default OpenCard