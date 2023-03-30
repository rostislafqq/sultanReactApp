import { Link } from 'react-router-dom'
import s from './formHeader.module.scss'

const FormHeader = () =>{
    return(
        <div className={s.container}>
            <nav className={s.nav}>
                <Link to='/'>Главная</Link>
                <Link to='/cart'>Корзина</Link>
                <Link className={s.active} to='/cart/formalize'>Оформление заказа</Link>
            </nav>
            <h1 className={s.header}>Оформление заказа</h1>
        </div>
    )
}

export default FormHeader