import s from './cart.module.scss'
import { Link } from 'react-router-dom';
import cart from '../../../assets/cart.svg'
import burger from '../../../assets/burger.svg'
import logo from '../../../assets/logo.svg'

interface PropsCartItem {
    cost:number,
    count:number,
    toggleBurger:() => void
}

const CartItem:React.FC<PropsCartItem> = ({toggleBurger,cost,count}) =>{
    return(
        < div className={s.cart}>
            <div className={s.burger} onClick={()=>{
                toggleBurger()
            }}>
             <img className={s.burgerIMG} src={burger} alt="burger" />
            </div>
            <Link to='/catalog'>
            <img className={s.logo} src={logo} alt="logo" />
            </Link>
            <Link className={s.cartItem} to='/cart'>
                <img className={s.cartImg} src={cart} alt="cart" />
                <span className={s.count}>{count}</span>
                <div className={s.cartInfo}>
                    <p className={s.cartName}>Корзина</p>
                    <p className={s.cartCost}>{cost} ₸</p>
                </div>
            </Link>

        </ div>
    )
}
export default CartItem