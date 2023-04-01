import { useSelector } from 'react-redux'
import CartGoods from './cartGoods/cartGoods'
import CartHeader from './cartHeader/cartHeader'
import { RootState } from '../../store/store'
import s from './cartGoods/cartGoods.module.scss'
import { Link } from 'react-router-dom'

const CartContainer = () =>{
    const cards = useSelector((state:RootState)=>state.cart.cards)

    return(
        <>
        <CartHeader />
        {cards.length>0?cards.map((v)=><><CartGoods key={v.barcode} name={v.name} 
        size={v.size} sizeType={v.sizeType} barcode={v.barcode}
        cost={v.cost} manuf={v.manuf} brand={v.brand} img={v.img}
        intro={v.intro} count={v.count}
        />
        </>):<h1 className={s.empty}>Пусто😔</h1>}
        {cards.length>0?<Link className={s.footerLink} to='/sultanReactApp/cart/formalize'>Оформить заказ</Link>:''}
        </>
    )
}

export default CartContainer