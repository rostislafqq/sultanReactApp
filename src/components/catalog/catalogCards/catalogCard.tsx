import s from './catalogCard.module.scss'
import bottle from '../../../assets/bottle.svg'
import box from '../../../assets/box.svg'
import cart from '../../../assets/cartWhite.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCardStore, setTotalCost } from '../../../store/Slices/cartSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'


const CatalogCard:React.FC<IOncklickAddCart> = ({intro,name,sizeType,barcode,manuf,img,brand,cost,size}) =>{
    const dispatch = useDispatch()
    //burger 
    const burgerActive = useSelector((state:RootState)=>state.burger.burgerActive)
    return(
        <Link to={`/sultanReactApp/catalog/${barcode}`} className={window.innerWidth<=650&&!burgerActive?s.none:s.card}>
            <img className={s.mainIMG} src={img} alt="tovar" />
            <img src={sizeType === 'g' ? box:bottle} alt="size" />
            <span className={s.size}>{size}</span>
            <h2 className={s.cardName}><b>{name.split(' ')[0]}</b> {name.split(' ').slice(1).join(' ')}</h2>
            <p className={s.barcode}>Штрихкод: <span className={s.barcodeNum}>{barcode}</span></p>
            <p className={s.manuf}>Производитель: <span className={s.manufName}> {manuf}</span></p>
            <p className={s.brand}>Бренд: <span className={s.brandName}>{brand}</span></p>
            <div className={s.buy}>
                <p className={s.cost}>{cost} ₸</p>
                <button onClick={(e)=>{
                    e.preventDefault()
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
                        count:1
                    }))
                    dispatch(setTotalCost())
                }} className={s.costBtn}> В КОРЗИНУ<img src={cart} alt="cart" /></button>
            </div>
        </Link>
    )
}

export default CatalogCard

