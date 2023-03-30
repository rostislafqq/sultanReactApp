import { Link } from 'react-router-dom'
import s from './cartHeader.module.scss'

const CartHeader =()=>{

    return(
        <div className={s.container}>
            <nav className={s.nav}>
                <Link to='/'>Главная</Link>
                <Link className={s.active} to='/cart'>Корзина</Link>
            </nav>
            <h1 className={s.header}>Корзина</h1>
        </div>
    )
}

export default CartHeader