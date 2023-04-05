import s from './cartGoods.module.scss'
import bottle from '../../../assets/bottle.svg'
import box from '../../../assets/box.svg'
import bin from '../../../assets/bin.svg'
import { useDispatch } from 'react-redux'
import { deliteItem, plusCount, removeCount, setTotalCost } from '../../../store/Slices/cartSlice'
import { Link } from 'react-router-dom'

const CartGoods:React.FC<ICardsCart> = ({barcode,img,size,sizeType,name,intro,count,cost})=>{
    const dispatch = useDispatch()

    return(
        <>
        
        <div className={s.container}>
        <Link to={`/sultanReactApp/catalog/${barcode}`}  >
            <div className={s.imgContainer}>
                <img src={img} alt="tovar" />
            </div>
        </Link>
            <div className={s.introContainer}>
                <div className={s.tovarInfo}>
                    <div className={s.size}>
                        <img src={sizeType==='g'?box:bottle} alt="size" />
                        <span>{size}</span>
                    </div>
                    <h3 className={s.name}>{name}</h3>
                    <p className={s.info}>
                     {intro}
                    </p>
                </div>
                <div className={s.buy}>
                    <div className={s.countContainer}>
                        <button onClick={()=>{
                            dispatch(removeCount(barcode))
                            dispatch(setTotalCost())
                        }} className={s.btn}>-</button>
                        <p className={s.count}>{count}</p>
                        <button onClick={()=>{
                            dispatch(plusCount(barcode))
                            dispatch(setTotalCost())
                        }} className={s.btn}>+</button>
                    </div> 
                    <h3 className={s.cost}>{cost} ₸</h3>
                    <img onClick={()=>{
                        dispatch(deliteItem(barcode))
                        dispatch(setTotalCost())
                    }} className={s.bin} src={bin} alt="bin" />
                </div>
            </div>
        </div>
       
        </>
    )
}

export default CartGoods