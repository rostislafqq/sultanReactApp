import s from './order.module.scss'

import { Link } from 'react-router-dom'
import pencil from '../../../assets/pencil.svg'
import OrderCard, { PropsOrderCard } from './orderCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const Order =() =>{
    const cards:PropsOrderCard[] = useSelector((state:RootState)=>state.cart.cards)
    const total = useSelector((state:RootState)=>state.cart.totalCost)

    return(
        <div className={s.container}>
            <h3 className={s.header}>Ваш заказ</h3>
            <div className={s.scrollBar}>
                {cards.map((v)=><OrderCard key={v.barcode} name={v.name}
                img={v.img} size={v.size} sizeType={v.sizeType} cost={v.cost}
                />)}
            </div>
            <div className={s.footer}>
                <p className={s.result}>ИТОГО</p>
                <p className={s.result}>{total} ₸</p>
            </div>
            <Link className={s.link} to='/sultanReactApp/cart'>Редактировать заказ <img className={s.pencil} src={pencil} alt="pencil" /></Link>
        </div>
    )
}

export default Order