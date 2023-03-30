import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import PaginationContainer from "../pagination/paginationContainer"
import Text from "../simpleText/text"
import CatalogCard from "./catalogCard"
import s from './catalogCard.module.scss'
import loading from '../../../assets/loading.gif'

const CatalogCardsContainer =()=>{
    const card = useSelector((state:RootState) => state.cards.cards)
   
    return (
        <div>
         <div className={s.container}>
            {card.length>0?card.map((v,i)=><CatalogCard intro={v.intro} key={i} name={v.name} sizeType={v.sizeType} barcode={v.barcode} manuf={v.manuf} img={v.img} brand={v.brand} cost={v.cost}  size={v.size}/>):<img className={s.loading} src={loading} alt="load"/>}
        </div>
        <PaginationContainer />
        <Text/>
        </div>
       
    )
}

export default CatalogCardsContainer