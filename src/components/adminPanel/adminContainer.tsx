import { useSelector } from 'react-redux'
import s from './admin.module.scss'
import AdminCard from './adminCard'
import { RootState } from '../../store/store'
import AdminNewCard from './adminNewCard'

const AdminContainer = () =>{
    const cards = useSelector((state:RootState)=>state.cards.cardsTotal)
    
    return(
        <div className={s.container}>
            <h1 className={s.header}>Админ панель</h1>
            <div className={s.cardsWrapper}>
                {cards.map((v,i)=><AdminCard id={i} intro={v.intro} key={v.barcode} types={v.types} name={v.name} sizeType={v.sizeType} barcode={v.barcode} manuf={v.manuf} img={v.img} brand={v.brand} cost={v.cost}  size={v.size}/>)}
            </div>
            <AdminNewCard />
        </div>
    )
}

export default AdminContainer